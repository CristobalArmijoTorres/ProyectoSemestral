// models.ts
export interface Inscripcion {
    asignaturaId: string;
    cursoId: string;
  }
  
  export interface Estudiante {
    id: string;
    nombre: string;
    inscripciones: Inscripcion[];
  }
  
  export interface Asignatura {
    idAsig: string;
    nombre: string;
    codigo: string;
    profesorId: string;
    contenido: string;
    mostrarModal: boolean;
  }
  