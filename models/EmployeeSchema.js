const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique:true
  },
  EmployeeID: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

const employee = new mongoose.model("employee", EmployeeSchema);

module.exports = employee;
