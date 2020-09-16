// import controller
const ProductsController = require("../controller/products.controller")

// setup routes url 
module.exports = (app) => {

    app.get("/api/products", ProductsController.index);
    app.post("/api/products/create", ProductsController.create);
    app.get("/api/products/:_id", ProductsController.show);

}