const Employee = require("../models/employee");
const Post = require("../models/post");

const employeeCtrl = {};

const postCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
  const employee = new Employee({
    documento: req.body.documento,
    nombre_completo: req.body.nombre_completo,
    f_inicio: req.body.f_inicio,
    f_fin: req.body.f_fin,
    h_inicio_turno: req.body.h_inicio_turno,
    h_fin_turno: req.body.h_fin_turno,
    h_inicio_he: req.body.h_inicio_he,
    h_fin_he: req.body.h_fin_he,
    motivo_he: req.body.motivo_he,
  });
  await employee.save();
  res.json({ status: "Employee created" });
};

postCtrl.getPosts = async (req, res, next) => {
  const posts = await Employee.find();
  res.json(posts);
};

postCtrl.createPost = async (req, res, next) => {
  const employee = new Employee({
    documento: req.body.documento,
    nombre_completo: req.body.nombre_completo,
    f_inicio: req.body.f_inicio,
    f_fin: req.body.f_fin,
    h_inicio_turno: req.body.h_inicio_turno,
    h_fin_turno: req.body.h_fin_turno,
    h_inicio_he: req.body.h_inicio_he,
    h_fin_he: req.body.h_fin_he,
    motivo_he: req.body.motivo_he,
  });
  await posts.save();
  res.json({ status: "Po created" });
};

module.exports = employeeCtrl;
module.exports = postCtrl;
