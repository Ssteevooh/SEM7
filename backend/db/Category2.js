const knex = require("./Knex");

function createCategory2(category2) {
    return knex("Category2").insert(category2);
}

function getCategory2(category1id) {
    return knex("Category2").select({
        id: "id",
        category1: "category2"
    }).where("category1", category1id);
}

module.exports = {
    createCategory2,
    getCategory2
};