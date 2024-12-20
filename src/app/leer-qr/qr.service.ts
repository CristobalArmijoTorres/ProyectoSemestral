import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiUrl = 'http://192.168.84.55:3000/asistencias'; 

  constructor(private http: HttpClient) {}

  
  registrarAsistencia(asignaturaId: string, nombreAsig: string,estudianteId: string, seccionId: string): Observable<any> {
    const fechaActual = new Date().toLocaleDateString(); 
    const asistencia = {
      id:  this.currentId++, 
      asignaturaId: asignaturaId,
      nombreAsig: nombreAsig,
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
