const mysql = require('mysql');
const env = require('../config/env');

const RECONNECTABLE_ERRORS = [
  'PROTOCOL_CONNECTION_LOST',
  'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR',
  'PROTOCOL_ENQUEUE_AFTER_QUIT',
  'ECONNRESET',
  'ETIMEDOUT',
  'ER_CON_COUNT_ERROR',
  'POOL_CLOSED',
  'EPIPE'
];

let pool = createPool();

function createPool() {
  return mysql.createPool({
    user: env.db.user,
    host: env.db.host,
    password: env.db.password,
    database: env.db.database,
    port: env.db.port,
    ssl: {
      rejectUnauthorized: true
    },
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  });
}

// Helper que ejecuta consultas con Callback API y se recupera automáticamente
// cuando se pierde la conexión (TiDB Serverless / Render apagados por inactividad).
function runQuery(query, params, callback, retried) {
  pool.query(query, params, (err, result) => {
    if (err) {
      const isConnectionError = RECONNECTABLE_ERRORS.some(
        (code) => err.code === code || String(err.message).includes(code)
      );

      if (isConnectionError && !retried) {
        console.error('Database connection lost, reconnecting...', err.code);
        pool.end(() => {
          pool = createPool();
          runQuery(query, params, callback, true);
        });
        return;
      }

      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

const db = {
  query(query, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = [];
    }
    runQuery(query, params, callback, false);
  }
};

module.exports = db;