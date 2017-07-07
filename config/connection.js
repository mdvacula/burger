//require node pacage mysql
var mysql = require("mysql");

//declare connection params
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

//create connection to database
connection.connect(function(err) {
  if(err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
