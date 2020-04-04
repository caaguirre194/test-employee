mongoose = require("mongoose");

const URL = "mongodb://localhost/test-employee";

mongoose
  .connect(URL)
  .then((db) => console.log("base de datos conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;
