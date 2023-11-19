exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    activeAddProduct: true,
    productCss: true,
  });
  //=> path is passing to the main layout to make the style of link [Add product] dynamic
  //=> path could be anything
};
const products = [];
exports.postAppProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  }); //=> passing products to view

  //=> render is a default function use to render template engine
  //=> it go to the path we define in the global set
  //=> also no need to set the type of the file because we set the
  //=> engine type to be pug
};
