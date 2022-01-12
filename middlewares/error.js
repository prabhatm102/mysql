const winston = require("winston");
require("express-async-errors");

module.exports = (err, req, res, next) => {
  winston.error(err.message);
  winston.add(new winston.transports.File({ filename: "logException.log" }));
  res.status(500).send("Internal Server Error");
};
