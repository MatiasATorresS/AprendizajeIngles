function createRateLimit({ max, windowMs, key, now = Date.now }) {
  const entries = new Map();
  const cleanup = setInterval(() => {
    const current = now();
    for (const [id, entry] of entries) {
      if (entry.resetAt <= current) entries.delete(id);
    }
  }, windowMs);
  cleanup.unref?.();

  return (req, res, next) => {
    const id = key(req);
    if (!id) return res.status(401).json({ message: 'Not logged in' });
    const current = now();
    let entry = entries.get(id);
    if (!entry || entry.resetAt <= current) {
      entry = { count: 0, resetAt: current + windowMs };
      entries.set(id, entry);
    }
    entry.count += 1;
    if (entry.count > max) {
      res.set('Retry-After', String(Math.ceil((entry.resetAt - current) / 1000)));
      return res.status(429).json({ message: 'Demasiados intentos. Espera antes de volver a probar.' });
    }
    next();
  };
}

const ip = (req) => req.ip || req.socket?.remoteAddress || 'unknown';
const loginByAccount = createRateLimit({
  max: 6,
  windowMs: 15 * 60 * 1000,
  key: (req) => `${ip(req)}:${typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase().slice(0, 254) : ''}`,
});
const loginByIp = createRateLimit({ max: 120, windowMs: 15 * 60 * 1000, key: ip });
const registerByIp = createRateLimit({ max: 10, windowMs: 60 * 60 * 1000, key: ip });
const chatByUserHour = createRateLimit({
  max: 8, windowMs: 60 * 60 * 1000,
  key: (req) => req.session?.user?.[0]?.id,
});
const chatByUserDay = createRateLimit({
  max: 24, windowMs: 24 * 60 * 60 * 1000,
  key: (req) => req.session?.user?.[0]?.id,
});

module.exports = {
  createRateLimit, loginByAccount, loginByIp, registerByIp,
  chatByUserHour, chatByUserDay,
};
