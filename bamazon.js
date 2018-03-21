var express = require("express");
var mysql = require("mysql");
var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/", function(req, res) {


  connection.query("SELECT * FROM products", function(err, result) {
    console.log(result.length);
 
    var html = "<h1> Products Available </h1>";

  
    html += "<ul>";
    
  
    for (var i = 0; i < result.length; i++) {
      html += "<p>Item: " + result[i].Item + " </p></li>";
      html += "<p>Price: " + result[i].Price + " </p></li>";
      html += "<p>Stock: " + result[i].Stock + " </p></li>";
    }

    
    html += "</ul>";

    
    res.send(html);
  });
});
app.get("/department", function(req, res) {

  
  connection.query("SELECT * FROM products order BY Department", function(err, result) {

    
    var html = "<h1> Departments Available </h1>";

   
    html += "<ul>";

    
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].ID + "</p>";
      html += "<p>Item: " + result[i].Item + " </p></li>";
      html += "<p>Price: " + result[i].Price + " </p></li>";
    }

    
    html += "</ul>";

    
    res.send(html);
  });
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
