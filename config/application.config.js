const env = process.env.NODE_ENV || 'development';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const config = {
  development: {
    path: '/',
    baseUrl: `http://${host}:${port}`,
    apiUrl: "http://localhost:3000"
  },
  production: {
    path: '/vesteer/',
    baseUrl: '',
    apiUrl: "http://localhost:3000"
  },
};

module.exports = config[env];
