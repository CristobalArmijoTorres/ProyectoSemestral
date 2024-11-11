import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiUrl = 'http://localhost:3000/asistencias'; // URL base para el registro de asistencias

  constructor(private http: HttpClient) {}

  // Método para registrar asistencia
  registrarAsistencia(asignaturaId: string, estudianteId: string): Observable<any> {
    const fechaActual = new Date().toISOString(); // Fecha y hora actual en formato ISO
    const asistencia = {
      asignaturaId: asignaturaId,
      estudianteId: estudianteId, // Asegúrate de incluir el estudianteId
      fecha: fechaActual,
      estado: 'Presente'
    };
    
    return this.http.post(this.apiUrl, asistencia).pipe(
      catchError(error => {
        console.error('Error al registrar asistencia', error);
        return throwError(error); // Lanza el error para que pueda ser manejado en el componente
      })
    );
  }
}