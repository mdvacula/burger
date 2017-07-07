var connection = require("../config/connection.js");

var orm = {

  selectAll: function(tableInput, cb){
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, tableInput, function(err, result){
      if(err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(tblname, vals, cb){

    var insertString = "INSERT INTO ?? SET ?;";

    connection.query(insertString, [tblname,{burger_name: vals.toString()}], function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });

  },
  updateOne: function(tblname, idNum, cb){
    var updateString = "UPDATE ?? SET ? where ?;";
    connection.query(updateString, [tblname, {devoured: true},{id : idNum}], function(err, result, fields){
      if(err) {
        throw err;
      }
      cb(fields);
    });
  }
};


module.exports = orm;
