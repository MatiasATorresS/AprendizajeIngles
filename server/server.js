const app = require('./src/app');
const env = require('./src/config/env');

app.listen(env.port, () => {
  console.log(`Server is listening on port ${env.port}`);
});