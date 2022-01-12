const winston = require("winston");
const config = require("config");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: config.get("HOST"),
  user: config.get("USER"),
  password: config.get("PASSWORD"),
  database: config.get("DATABASE"),
});
connection.connect((err) => {
  if (err) throw err;
  winston.info("Connected Successfully");
  // connection.query(
  //   "CREATE TABLE user(id int primary key AUTO_INCREMENT,name varchar(10))",
  //   (err) => {
  //     if (err) throw err;
  //     winston.info("table created successfully!");
  //   }
  // );
  //   connection.query("INSERT INTO user (id,name) values(4,'abc')", (err) => {
  //     if (err) throw err;
  //     console.log("record inserted successfully!");
  //   });
});

module.exports = connection;
