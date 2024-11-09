// models.ts
export interface Asignatura {
  idAsig: string;
  nombre: string;
  mostrarModal?: boolean;
}

export interface Estudiante {
  estudianteId: string;
  nombre: string;
  asignaturas: Asignatura[];
}
