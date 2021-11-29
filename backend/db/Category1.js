const knex = require("./Knex");

function createCategory1(category1) {
  return knex("Category1").insert(category1);
}

function getCategory1(countryid) {
  return knex("Category1").select({
    id: "id",
    category1: "category1"
  }).where("country", countryid);
}

module.exports = {
  createCategory1,
  getCategory1
};