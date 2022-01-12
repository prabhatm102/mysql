const config = require("config");

module.exports = () => {
  if (!config.get("jwtPrivateKey"))
    throw new Error("jwtPrivateKey is not defined!");
  if (!config.get("HOST")) throw new Error("HOST is not defined!");
  if (!config.get("USER")) throw new Error("USER is not defined!");
  //if (!config.get("PASSWORD")) throw new Error("PASSWORD is not defined!");
  if (!config.get("DATABASE")) throw new Error("DATABASE is not defined!");
};
