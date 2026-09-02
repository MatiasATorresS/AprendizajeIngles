const authService = require('../services/auth.service');

function register(req, res) {
  const { username, email, password } = req.body;

  authService.register({ username, email, password }, (err) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).send({ message: 'Error registering user' });
      return;
    }
    console.log('User registered successfully');
    res.status(200).send({ message: 'User registered successfully' });
  });
}

function getLogin(req, res) {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
}

function login(req, res) {
  const { email, password } = req.body;

  authService.login(email, password, (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send({ message: 'Error logging in' });
      return;
    }

    if (!result.user) {
      console.log('User does not exist');
      res.status(401).send({ message: 'User does not exist' });
      return;
    }

    if (!result.match) {
      console.log('Wrong email/password');
      res.status(401).send({ message: 'Wrong email/password' });
      return;
    }

    req.session.user = result.user;
    console.log(req.session.user);
    console.log('User logged in successfully');
    res.status(200).send(result.user);
  });
}

function logout(req, res) {
  res.clearCookie('userId');
  req.session.destroy();

  res.json({ message: 'Logout successful' });
  console.log('Logout successful');
}

module.exports = { register, getLogin, login, logout };