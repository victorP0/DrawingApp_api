const knex = require("knex");

const knexInstance = knex({
  client: "postgres",
  connection: process.env.DATABASE_URL,
});

console.log("knex and driver installed correctly");