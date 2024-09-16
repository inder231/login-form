const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  mobile: {
    type: Number,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    required: true,
  },
  role: {
    type: String,
    enum : ['Customer', 'Admin', 'SuperAdmin'],
    default: 'Customer'
},
});

const User = model("user", UserSchema);

module.exports = { User };
