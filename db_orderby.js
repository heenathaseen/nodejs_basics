var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "heena",
  password: "atsemicolon",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Sort the result by name
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
