function requireAuth(req, res, next) {
  if (req.session?.user?.[0]) {
    next();
    return;
  }
  res.status(401).send({ message: 'Not logged in' });
}

function requireAdmin(req, res, next) {
  if (!req.session?.user?.[0]) return res.status(401).send({ message: 'Not logged in' });
  if (req.session.user[0].role !== 'admin') return res.status(403).send({ message: 'Forbidden' });
  next();
}

module.exports = { requireAuth, requireAdmin };
