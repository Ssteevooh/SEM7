const knex = require("./Knex");

function createCategory3(category3) {
  return knex("Category3").insert(category3);
}

function getCategory3(category2id) {
  return knex("Category3").select({
    id: "id",
    category3: "category3"
  }).where("category2", category2id);
}

module.exports = {
  createCategory3,
  getCategory3
};