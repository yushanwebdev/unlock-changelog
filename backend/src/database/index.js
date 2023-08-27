const pg = require("pg");

const pool = new pg.Pool({
  user: "myuser",
  host: "localhost",
  database: "mydb",
  password: "mypassword",
  port: 5432,
});

module.exports = {
  pool,
};
