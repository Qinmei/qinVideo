export default () => ({
  config: {
    defaultUserName: process.env.BIZ_USER || 'admin',
    defaultPassword:
      process.env.BIZ_PASSWORD || 'e10adc3949ba59abbe56e057f20f883e',
    tokenExpired: parseInt(process.env.BIZ_TOKEN_EXPIRED, 10) || 7200000,
    jwtSecret: process.env.BIZ_JWT_SECRET || 'qinvideo',
    jwtExpired: process.env.BIZ_JWT_EXPIRED || '7200s',
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
