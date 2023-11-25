const fs = require("fs");
const path = require("path");
const pathHelper = require("../util/path");
const products = [];

const filePath = path.join(pathHelper, "data", "product.json");

const getProductsFromFile = (callbackFunction) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return callbackFunction([]);
    }
    callbackFunction(JSON.parse(fileContent));
  });
};

module.exports = class product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  save = () => {
    getProductsFromFile((product) => {
      console.log("product =>", product);
      console.log("this", this);
      product.push(this);
      fs.writeFile(filePath, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
  };

  static fetchAll = (callbackFunction) => {
    getProductsFromFile(callbackFunction);
  };
};
