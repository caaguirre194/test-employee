//  REPOSITORIO --> https://github.com/caaguirre194/test-employee

/*
Para probar los servicios de almacenar empleados y usuarios se debe tener 
en la base de datos de mongo una base de datos llamada test-posts

*/


use test-employee
db.createCollection("employees");


db.employees.insert({
    documento: "1111111",
    nombre_completo: "Carlos Aguirre",
    f_inicio: "04/04/2020",
    f_fin: "04/04/2020",
    h_inicio_turno: "8:00",
    h_fin_turno: "8:00",
    h_inicio_he: "8:00",
    h_fin_he: "8:00",
    motivo_he: "test",
  });
/*
1. Documento 
2. Nombres y apellidos 
3. Fecha inicio 
4. Fecha fin 
5. Horario inicio de turno. 
6. Horario fin de turno. 
7. Horario Inicio hora extra 
8. Horario fin Hora extra. 
9. Motivo hora extra 
*/





use test-employees
db.createCollection("employees");


db.posts.insert({
    userId: 1,
    id: 1,
    title: "test",
    body: "test"
})
