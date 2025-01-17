const knex = require("./Knex");

function createAuction (auction) {
    return knex("Auctions").insert(auction);
}

function getAuctions (struct, filters, settings) {
    return knex("Auctions").select(struct).where(filters)
    .limit(settings.maxPageSize).offset((settings.page - 1) * settings.maxPageSize)
    .orderBy(settings.orderBy, ["desc", "asc"][settings.orderAscending]);
}

function getAuctionWithId (id) {
    return knex("Auctions").select("*").where({"id": id});
}

function getCount (filters) {
    return knex("Auctions").count().where(filters);
}

module.exports = {
    createAuction: createAuction,
    getAuctions: getAuctions,
    getCount: getCount,
    getAuctionWithId: getAuctionWithId
};