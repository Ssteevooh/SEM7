const knex = require("./Knex");

function createSeller(seller){
    return knex("Sellers").insert(seller);
}

function getAllSellers(){
    return knex("Sellers").select("*");
}

module.exports = {
    createSeller,
    getAllSellers
};