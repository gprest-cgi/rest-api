import app from './app';
const debug = require('debug')('server');

const PORT = 3000;

app.listen(PORT, () => {
  debug(`Express server listening on port ${PORT}`);
});
