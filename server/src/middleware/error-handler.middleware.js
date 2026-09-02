function errorHandler(err, req, res, next) {
  console.error('Unexpected error:', err);
  res.status(500).send({ message: 'Internal server error' });
}

module.exports = { errorHandler };