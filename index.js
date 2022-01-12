const winston = require("winston");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("./start/logging")();
require("./start/config")();
require("./start/db");
require("./start/routes")(app);

app.listen(PORT, () => {
  winston.info(`Server is listening at port ${PORT}`);
});
