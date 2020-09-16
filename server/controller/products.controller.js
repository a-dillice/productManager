// import model
const Products = require("../models/products.model")

// setup modules
module.exports = {

    // setup index or home function
    index:(req, res) => {
        
        // find all documents
        Products.find().then((data) =>{

            // pass data to results 
            res.json({results:data});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err}); 

        });

    },
    // create
    create:(req, res) => {

        //get user data
        const userData = req.body;

        // add to collection
        Products.create(userData).then((data)=>{

            // pass data to results 
            res.json({results:data, success:"Product was successfully saved."});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        });

    }

}
