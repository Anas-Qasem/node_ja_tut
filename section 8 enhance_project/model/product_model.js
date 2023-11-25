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
  constructor(title) {
    this.title = title;
  }

  save = () => {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  };

  static fetchAll = (callbackFunction) => {
    getProductsFromFile(callbackFunction);
  };
};
