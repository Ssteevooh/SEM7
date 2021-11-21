const knex = require("./Knex");

function createAuction (auction) {
    return knex("Auctions").insert(auction);
}

function getAuctions (struct, filters, settings) {
    return knex("Auctions").select(struct).where(filters)
    .limit(settings.maxPageSize).offset(settings.page * settings.maxPageSize)
    .orderBy(settings.orderBy, ["desc", "asc"][settings.orderAscending]);
}

module.exports = {
    createAuction: createAuction,
    getAuctions: getAuctions
};