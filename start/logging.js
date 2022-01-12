const winston = require("winston");
require("express-async-errors");

module.exports = () => {
  process.on("uncaughtException", (ex) => {
    winston.error(ex.message);
    process.exit(1);
  });
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
  winston.add(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtException.log" })
  );
};
