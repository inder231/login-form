const createError = require("http-errors");
const jwt = require('jsonwebtoken');
const { AuthSchema } = require("../helpers/validate_schema");
const { User } = require("../models/user.model");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
  login: async (req, res, next) => {
    try {
      const result = await AuthSchema.validateAsync(req.body);
      const { name, email, mobile } = req.body;
      const user = await User.findOne({ name, email, mobile });
      if (!user) throw createError.NotFound("User not registered");
      
      const payload = { email };
      const options = {
        expiresIn: "5m",
        issuer: "inder39811@gmail.com",
        audience: user.email,
      };
      const accessToken = jwt.sign(payload, secretKey, options);

      res.send({ accessToken, role: user.role });
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest(error.message));
      next(error);
    }
  },

};
