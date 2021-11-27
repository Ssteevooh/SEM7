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
        this.used = data.used === true;
        this.mint = data.mint === true;
        this.postalItem = data.postalItem === true;
        this.certificate = data.certificate === true;
        this.auctionNumber = data.auctionNumber;
        this.lotNumber = data.lotNumber;
        this.date = new Date().toString();
        this.user = data.user;
    }
}

module.exports = {
    Auction: Auction
};