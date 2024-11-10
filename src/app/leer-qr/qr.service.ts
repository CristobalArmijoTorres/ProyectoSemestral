import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrService {
  private apiUrl = 'http://localhost:3000/asistencia'; // URL de la API o tu base de datos local

  constructor(private http: HttpClient) {}

  // Método para registrar la asistencia
  registrarAsistencia(asignaturaId: string, estudianteId: string): Observable<any> {
    const asistenciaData = {
      asignaturaId: asignaturaId,
      estudianteId: estudianteId,
      fecha: new Date().toISOString(), // Fecha de la asistencia
    };

    // Realizamos una petición POST para registrar la asistencia
    return this.http.post(this.apiUrl, asistenciaData);
  }
}
