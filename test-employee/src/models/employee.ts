export class Employee {



    constructor(
      documento = '',
      nombre_completo= '',
      f_inicio= '',
      f_fin= '',
      h_inicio_turno='',
      h_fin_turno= '',
      h_inicio_he= '',
      h_fin_he= '',
      motivo_he= ''
    ) {
    
    this.documento = documento;
    this.nombre_completo = nombre_completo;
    this.f_inicio = f_inicio
    this.f_fin = f_fin;
    this.h_inicio_turno = h_inicio_turno;
    this.h_fin_turno = h_fin_turno;
    this.h_inicio_he = h_inicio_he;
    this.h_fin_he = h_fin_he;
    this.motivo_he = motivo_he;
    }
  
    documento: string;
    nombre_completo: string;
    f_inicio: Date,
    f_fin: Date,
    h_inicio_turno: Date,
    h_fin_turno: Date,
    h_inicio_he: Date,
    h_fin_he: Date,
    motivo_he: string;
  }