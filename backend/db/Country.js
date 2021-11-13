const knex = require("./Knex");

function createCountry(country){
  return knex("Countries").insert(country);
}

function getAllCountries(){
  return knex("Countries").select("*");
}

module.exports = {
  createCountry,
  getAllCountries
};