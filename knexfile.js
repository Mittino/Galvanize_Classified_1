// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    database: 'gclassifieds',
    connection: 'postgres://localhost/gclassifieds'
  },
  test: {
    client: 'pg',
    database: 'gclassifieds_test',
    connection:'postgres://localhost/gclassifieds_test'
  },
  production: { },

};
