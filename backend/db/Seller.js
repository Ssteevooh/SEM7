const knex = require("./Knex");

function createSeller(seller){
  return knex("Sellers").insert(seller);
}

function getAllSellers(){
  return knex("Sellers").select("*");
}

// used to check if a specific id exists while validating for new auctions
function getCount(id) {
  return knex("Sellers").count().where({"id": id});
}

module.exports = {
  createSeller,
  getAllSellers,
  getCount
};