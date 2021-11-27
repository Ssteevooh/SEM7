// model for auctions

class Auction {
    constructor (data) {
        this.startingPrice = data.startingPrice;
        this.sellingPrice = data.sellingPrice;
        this.currency = data.currency;
        this.seller = data.seller;
        this.sellingYear = data.sellingYear;
        this.description = data.description;
        this.catalogueNumber = data.catalogueNumber;
        this.country = data.country;
        this.category1 = data.category1;
        this.category2 = data.category2;
        this.category3 = data.category3;
        this.used = data.used;
        this.mint = data.mint;
        this.postalItem = data.postalItem;
        this.certificate = data.certificate;
        this.auctionNumber = data.auctionNumber;
        this.lotNumber = data.lotNumber;
        this.user = data.user;
    }
}

module.exports = {
    Auction: Auction
};