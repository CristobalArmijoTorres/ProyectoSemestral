import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asistencias/reg-asistencia.service';
import { Asistencia } from '../asignaturas/models';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistenciasAgrupadas: { asignaturaId: string; asistencias: Asistencia[] }[] = [];
  selectedAsistencias: Asistencia[] | null = null;
  showModal = false;
  studentId: string = ''; 


  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.obtenerAsistenciasAgrupadas();
    this.cargarUsuario();
  }

  
  cargarUsuario() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (storedUser && storedUser.id) {
      this.asigAlumnoService.getUserById(storedUser.id).subscribe(
        (userData: any) => {
          console.log('Datos del usuario:', userData);  
          this.studentId = userData.id;
          this.obtenerAsistenciasAgrupadas();  
        },
        (error: any) => {
          console.error('Error al obtener los datos del usuario', error);  
        }
      );
    }
  }
  

  


  obtenerAsistenciasAgrupadas() {
    this.asigAlumnoService.getAsistenciasByStudentIdGroupedByAsignatura(this.studentId).subscribe({
      next: (asistenciasAgrupadas) => {
        this.asistenciasAgrupadas = asistenciasAgrupadas;
      },
      error: (error) => {
        console.error('Error al obtener asistencias agrupadas:', error);
      }
    });
  }

  openModal(asistencias: Asistencia[]) {
    this.selectedAsistencias = asistencias;
    this.showModal = true;
  }

  closeModal() {
    this.selectedAsistencias = null;
    this.showModal = false;
  }
}
