const Joi = require("@hapi/joi");
const joi = require("@hapi/joi");

const AuthSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  mobile: Joi.string().min(10).max(10).required(),
});

module.exports = {
  AuthSchema,
};
