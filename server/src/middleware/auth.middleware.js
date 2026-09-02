function requireAuth(req, res, next) {
  if (req.session.user) {
    next();
    return;
  }
  res.status(401).send({ message: 'Not logged in' });
}

module.exports = { requireAuth };