const mongoose = require("mongoose");
const AdminTemplate = new mongoose.Schema({
  fullNameadmin: {
    type: String,
    requrie: true,
  },
  usernameadmin: {
    type: String,
    required: true,
  },
  passwordadmin: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("admins", AdminTemplate);
