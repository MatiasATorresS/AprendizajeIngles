require('dotenv').config();

const corsOrigin = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',')
  : undefined;

module.exports = {
  port: process.env.PORT || 3031,
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
  },
  cors: {
    origin: corsOrigin
      ? originCallback(corsOrigin)
      : allowAllOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
  session: {
    key: 'userId',
    secret: process.env.SESSION_SECRET || 'userSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    },
  },
  ai: {
    openRouterApiKey: process.env.OPENROUTER_API_KEY,
  },
};

function allowAllOrigins(origin, callback) {
  callback(null, true);
}

function originCallback(allowedOrigins) {
  return function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Not allowed by CORS'));
  };
}