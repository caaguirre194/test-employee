const express = require("express");

const cors = require("cors");
const app = express();

const { mongoose } = require("./database");

app.set("port", process.env.PORT || 3000);

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use("/api/employees", require("./routes/employee.routes"));

app.listen(app.get("port"), () => {
  console.log(`server en puerto ${app.get("port")}`);
});
