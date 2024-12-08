import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiUrl = 'http://localhost:3000/asistencias'; 

  constructor(private http: HttpClient) {}

  
<<<<<<< HEAD
  registrarAsistencia(asignaturaId: string, nombreAsignatura: string,estudianteId: string, seccionId: string): Observable<any> {
=======
  registrarAsistencia(asignaturaId: string, estudianteId: string, seccionId: string): Observable<any> {
>>>>>>> parent of c01fb5c (por las dudas, para no perder nada)
    const fechaActual = new Date().toISOString(); 
    const asistencia = {
      id: Math.random().toString(36).substring(2, 6), 
      asignaturaId: asignaturaId,
      nombreAsigatura: nombreAsignatura,
      estudianteId: estudianteId,
      seccionId: seccionId,
      fecha: fechaActual,
      estado: true
    };
    return this.http.post(this.apiUrl, asistencia).pipe(
      catchError(error => {
        console.error('Error al registrar asistencia', error);
        return throwError(error); 
      })
    );
  }

}
