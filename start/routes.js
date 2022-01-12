const express = require("express");
const error = require("../middlewares/error");
const user = require("../routes/user");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/users", user);
  app.use(error);
};
