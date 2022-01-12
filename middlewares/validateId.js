module.exports.validateId = (req, res, next) => {
  if (isNaN(Number(req.params.id)))
    return res.status(401).send("Please provide valid id");
  next();
};
