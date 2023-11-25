const Product = require("../model/product_model");

const products = [];
exports.postAppProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    activeAddProduct: true,
    productCss: true,
  });
  //=> path is passing to the main layout to make the style of link [Add product] dynamic
  //=> path could be anything
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin products",
      path: "/admin/products",
    }); //=> passing products to view
  });
};
