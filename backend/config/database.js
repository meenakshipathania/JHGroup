module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '165.227.11.15'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'jhgroup'),
      user: env('DATABASE_USERNAME', 'jhgroup'),
      password: env('DATABASE_PASSWORD', '@jhgroup#2022'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
