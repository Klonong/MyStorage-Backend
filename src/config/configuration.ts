export default () => ({
  port: parseInt(process.env.PORT ?? '3001', 10),
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  database: {
    url: process.env.DATABASE_URL,
  },
});
