const Joi = require("joi");

module.exports.validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(401).send(error.details[0].message);
  next();
};
