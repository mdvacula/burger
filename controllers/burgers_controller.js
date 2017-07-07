var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

//get route for root, get all burgers
router.get("/", function(req, res){
  burger.all(function(data){
    var bObject = {
      burgers: data
    };
    console.log(bObject);
    res.render("index", bObject);
  });
});

//post route for root, adds burger to database from name input field
router.post("/", function(req, res){
  //console.log(req.body.name);

  burger.create(req.body.name, function(){
    res.redirect("/");
  });
});

//take in burger id as a required parameter
router.put("/:id", function(req, res){
  //console.log(req.params.id);

  burger.update(req.params.id, function(){
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
