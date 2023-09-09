import pg from "pg";

export const pool = new pg.Pool({
  user: "myuser",
  host: "localhost",
  database: "mydb",
  password: "mypassword",
  port: 5432,
});
