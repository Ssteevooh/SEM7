// model for auctions
const countryDb = require("../db/country");

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

        // boolean validation
        this.used = data.used === true;
        this.mint = data.mint === true;
        this.postalItem = data.postalItem === true;
        this.certificate = data.certificate === true;

        this.auctionNumber = data.auctionNumber;
        this.lotNumber = data.lotNumber;
        this.date = new Date().toString();
        this.user = data.user;
    }

    // used to check if the auction is assigned a country, seller or category that does not exist
    async invalidCategories() {
        var count;
        if (this.country != null) {
            count = await countryDb.getCount(this.country);
            if (count[0]["count(*)"] < 1) {
                return true;} 
        } // TODO -- add checks for other id's too
        return false;
    }
}

module.exports = {
    Auction: Auction
};