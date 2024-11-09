export interface Asignatura {
  idAsig: string;
  nombre: string;
  codigo: string;
  mostrarModal?: boolean;
}

export interface Estudiante {
  estudianteId: string;
  nombre: string;
  asignaturas: Asignatura[];
}
export interface Asignaturas {
  profesorId: string;
  nombre: string;
  asignaturas: Asignatura[];
}
