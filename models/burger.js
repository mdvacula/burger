var orm = require("../config/orm.js");

var burger = {
   //Retrieve all burgers
   all: function(cb) {
     orm.selectAll("burgers", function(res){
       cb(res);
     });
   },

   //Update burger
   update: function(id,cb){
     orm.updateOne("burgers", id, function(res){
       cb(res);
     });
   },

   //Create new burger
   create: function(vals, cb){
      orm.insertOne("burgers", vals, function(res){
         cb(res);
      });
   }
};

module.exports = burger;
