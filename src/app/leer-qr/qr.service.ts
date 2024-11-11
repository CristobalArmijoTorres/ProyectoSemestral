import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiUrl = 'http://localhost:3000'; // URL base

  constructor(private http: HttpClient) {}

  // Método para registrar asistencia
  registrarAsistencia(asignaturaId: string, estudianteId: string, seccionId: string): Observable<any> {
    const fechaActual = new Date().toISOString(); // Fecha y hora actual en formato ISO
    const asistencia = {
      asignaturaId: asignaturaId,
      estudianteId: estudianteId, // Asegúrate de incluir el estudianteId
      fecha: fechaActual,
      estado: 'Presente'
    };

    // Validar que el estudiante pertenece a la sección
    return this.http.get<any[]>(`${this.apiUrl}/asignaturas?asignaturaId=${asignaturaId}`).pipe(  // Cambiado a any[]
      map((asignaturas: any[]) => {
        // Buscar la asignatura y verificar si el estudiante pertenece a la sección
        const asignatura = asignaturas.find(a => a.id === asignaturaId);
        if (asignatura) {
          const estudianteEnSeccion = asignatura.secciones.some((seccion: any) =>  // Añadido tipo 'any' para seccion
            seccion.id === seccionId && seccion.estudiantes.includes(estudianteId)
          );
          if (!estudianteEnSeccion) {
            throw new Error('El estudiante no pertenece a esta sección.');
          }
        } else {
          throw new Error('Asignatura no encontrada.');
        }
        // Si pasa la validación, registrar la asistencia
        return this.http.post(`${this.apiUrl}/asistencias`, asistencia);
      }),
      catchError(error => {
        console.error('Error al registrar asistencia', error);
        return throwError(error);
      })
    );
  }
}
