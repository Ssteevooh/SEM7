const knex = require("knex");

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "stamp_auction_db.sqlite3"
  }
});
module.exports = connectedKnex;