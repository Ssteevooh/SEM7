const knex = require("./Knex");

function createCountry(country){
  return knex("Countries").insert(country);
}

function getAllCountries(){
  return knex("Countries").select("*");
}

// used to check if a specific id exists while validating for new auctions
function getCount(id) {
  return knex("Countries").count().where({"id": id});
}

module.exports = {
  createCountry,
  getAllCountries,
  getCount
};