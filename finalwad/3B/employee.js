
const mongoose = require("mongoose")

constemployeeSchema = new mongoose.Schema({
name : String,
designation : String
})

module.exports = mongoose.model("Employee", employeeSchema)