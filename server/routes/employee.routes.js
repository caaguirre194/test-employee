const express = require("express");

const router = express.Router();

const employee = require("../controllers/employee.controller.js");

router.post("/", employee.createEmployee);

module.exports = router;
