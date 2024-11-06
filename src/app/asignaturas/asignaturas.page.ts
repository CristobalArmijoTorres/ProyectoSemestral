import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asignaturas/asig-alumno.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: any[] = []; // Lista de asignaturas inscritas
  asistencia: any[] = []; // Lista de asistencias de la asignatura seleccionada

  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    // Obtener el usuario logueado desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      // Llamar al servicio para obtener las asignaturas del estudiante
      this.asigAlumnoService.getAsignaturasByStudentId(storedUser.id).subscribe(
        (asignaturas: any[]) => {
          this.asignaturas = asignaturas; // Asignar las asignaturas al arreglo local
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  verModal(asignatura: any) {
    // Toggle del modal de la asignatura
    asignatura.mostrarModal = !asignatura.mostrarModal;

    if (asignatura.mostrarModal) {
      // Llamar al servicio para obtener la asistencia de la asignatura seleccionada
      this.asigAlumnoService.getAsistenciaByAsignaturaId(asignatura.codigo).subscribe(
        (asistencia: any[]) => {
          this.asistencia = asistencia; // Asignar la asistencia al arreglo local
        },
        (error: any) => {
          console.error('Error al cargar la asistencia', error);
        }
      );
    }
  }
}
