export interface Asignatura {
  idAsig: string;
  nombre: string;
  codigo: string;
  profesorId: string;
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

export interface Asistencia{
  id: string;
  asignaturaId: string;
  estudianteId: string;
  seccionId?: string;
  fecha: string;
  estado: boolean;
}