const parse = require('pg-connection-string').parse

const { host, port, database, user, password } = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      //   host,
      //   port,
      //   database,
      //   user,
      //   password,
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      ssl: {
        ca: env('DATABASE_CA'),
        // rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
})
