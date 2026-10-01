const test = require('node:test');
const assert = require('node:assert/strict');
const { createRateLimit } = require('../src/middleware/rate-limit.middleware');
const { validateRegistration } = require('../src/services/registration-validation.service');
const authService = require('../src/services/auth.service');
const { register } = require('../src/controllers/auth.controller');

function callLimiter(middleware, id) {
  const req = { id };
  const res = {
    set(name, value) { this[name] = value; return this; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; },
  };
  let allowed = false;
  middleware(req, res, () => { allowed = true; });
  return { allowed, code: res.code, retryAfter: res['Retry-After'] };
}

test('rate limit blocks excess calls per key and resets after the window', () => {
  let current = 0;
  const limiter = createRateLimit({ max: 2, windowMs: 1000, key: (req) => req.id, now: () => current });
  assert.equal(callLimiter(limiter, 'a').allowed, true);
  assert.equal(callLimiter(limiter, 'a').allowed, true);
  assert.equal(callLimiter(limiter, 'a').code, 429);
  assert.equal(callLimiter(limiter, 'a').retryAfter, '1');
  assert.equal(callLimiter(limiter, 'b').allowed, true);
  current = 1000;
  assert.equal(callLimiter(limiter, 'a').allowed, true);
});

test('registration normalizes valid fields and rejects weak or oversized input', () => {
  const valid = validateRegistration({ username: '  Ana  Pérez  ', email: ' ANA@Example.COM ', password: 'Clave123!' });
  assert.equal(valid.value.username, 'Ana Pérez');
  assert.equal(valid.value.email, 'ana@example.com');
  assert.equal(validateRegistration({ username: 'Ana', email: 'a@b.cl', password: 'password' }).error !== undefined, true);
  assert.equal(validateRegistration({ username: 'Ana', email: 'a@b.cl', password: 'A1!' + 'x'.repeat(70) }).error !== undefined, true);
  assert.equal(validateRegistration({ username: 'Ana', email: 'bad', password: 'Clave123!' }).error !== undefined, true);
  assert.equal(validateRegistration({ username: 'A'.repeat(101), email: 'a@b.cl', password: 'Clave123!' }).error !== undefined, true);
});

test('duplicate email returns conflict instead of a server error', () => {
  const original = authService.register;
  authService.register = (_user, callback) => callback({ code: 'ER_DUP_ENTRY' });
  try {
    const req = { body: { username: 'Ana Pérez', email: 'ana@example.com', password: 'Clave123!' } };
    const res = { status(code) { this.code = code; return this; }, send(body) { this.body = body; } };
    register(req, res);
    assert.equal(res.code, 409);
    assert.match(res.body.message, /correo ya está registrado/);
  } finally {
    authService.register = original;
  }
});
