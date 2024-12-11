import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asistencias/reg-asistencia.service';
import { Asistencia,Asignatura } from '../asignaturas/models';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistenciasAgrupadas: { asignaturaId: string; nombreAsig: string; asistencias: Asistencia[] }[] = [];
  selectedAsistencias: Asistencia[] | null = null;
  showModal = false;
  studentId: string = ''; 
  asignaturas: Asignatura[] = [];

  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (storedUser && storedUser.id) {
      this.asigAlumnoService.getUserById(storedUser.id).subscribe(
        (userData: any) => {
          this.studentId = userData.id;
          this.obtenerAsignaturas();  
        },
        (error: any) => {
          console.error('Error al obtener los datos del usuario', error);  
        }
      );
    }
  }

  obtenerAsignaturas() {
    this.asigAlumnoService.getAsignaturasByStudentId(this.studentId).subscribe({
      next: (asignaturas) => {
        this.asignaturas = asignaturas;
        this.obtenerAsistenciasAgrupadas();
      },
      error: (error) => {
        console.error('Error al obtener asignaturas:', error);
      }
    });
  }

  obtenerAsistenciasAgrupadas() {
    this.asigAlumnoService.getAsistenciasByStudentIdGroupedByAsignatura(this.studentId).subscribe({
      next: (asistenciasAgrupadas) => {
        this.asistenciasAgrupadas = asistenciasAgrupadas.map(group => {
          const asignatura = this.asignaturas.find(asig => asig.idAsig === group.asignaturaId);
          return {
            asignaturaId: group.asignaturaId,
            nombreAsig: asignatura ? asignatura.nombre : 'Asignatura no encontrada',
            asistencias: group.asistencias
          };
        });
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
