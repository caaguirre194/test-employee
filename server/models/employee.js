mongoose = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = new Schema({
  documento: { type: String, require: true },
  nombre_completo: { type: String, require: true },
  f_inicio: { type: String, require: true },
  f_fin: { type: String, require: true },
  h_inicio_turno: { type: String, require: true },
  h_fin_turno: { type: String, require: true },
  h_inicio_he: { type: String, require: true },
  h_fin_he: { type: String, require: true },
  motivo_he: { type: String, require: true },
});

module.exports = mongoose.model("Employee", employeeSchema);
