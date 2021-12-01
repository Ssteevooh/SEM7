// model for auctions
const countryDb = require("../db/country");
const sellerDb = require("../db/seller");
const category1Db = require("../db/category1");
const category2Db = require("../db/category2");
const category3Db = require("../db/category3");

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
  static listModel = {
    id: "id",
    startingPrice: "startingPrice",
    sellingPrice: "sellingPrice",
    currency: "currency",
    seller: "seller",
    sellingYear: "sellingYear",
    thumbnail: "thumbnail",
    date: "date",
    description: "description",
    catalogueNumber: "catalogueNumber"
  };

  // used to check if the auction is assigned a country, seller or category that does not exist
  async invalidCategories() {

    // return true if country doesn't exist
    if (! await this.validate(this.country, countryDb)) {
      return true;
    }

    // return true if seller doesn't exist
    if (! await this.validate(this.seller, sellerDb)) {
      return true;
    }

    // return true if cat1 doesn't exist
    if (! await this.validate(this.category1, category1Db)) {
      return true;
    }

    // return true if cat2 doesn't exist
    if (! await this.validate(this.category2, category2Db)) {
      return true;
    }

    // return true if cat3 doesn't exist
    if (! await this.validate(this.category3, category3Db)) {
      return true;
    }

    // check for category hierarchy
    if (this.category1 == null) {
      if (this.category2 != null || this.category3 != null) return true;
    }
    if (this.category2 == null && this.category3 != null) return true;

    return false;
  }

  // checks if an id exists in db, return true is exists, false if not
  async validate (id, db) {
    var count;
    if (id != null) {
      count = await db.getCount(id);
      if (count[0]["count(*)"] < 1) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  Auction: Auction
};