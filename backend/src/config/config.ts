export default () => ({
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT ?? '7000', 10),
    databaseUrl: process.env.DATABASE_URL,
  });