const knex = require("./Knex");

function createCountry(country){
    console.log("creating country");
    console.log(country);
    return knex("Countries").insert(country);
}

module.exports.createCountry = createCountry;