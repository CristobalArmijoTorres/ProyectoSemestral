import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asignaturas/asig-alumno.service';
import { Asignatura } from './models'; // Importa tus modelos

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: Asignatura[] = []; // Lista de asignaturas inscritas
  asistencia: any[] = []; // Lista de asistencias de la asignatura seleccionada

  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      this.asigAlumnoService.getAsignaturasByStudentId(storedUser.id).subscribe(
        (asignaturas: Asignatura[]) => {
          console.log('Asignaturas cargadas:', asignaturas);
          this.asignaturas = asignaturas;
          this.asignaturas.forEach(asignatura => {
            asignatura.mostrarModal = false; // Inicializa el modal en falso
          });
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  verModal(asignatura: Asignatura) {
    asignatura.mostrarModal = !asignatura.mostrarModal;

    if (asignatura.mostrarModal) {
      this.asigAlumnoService.getAsistenciaByAsignaturaId(asignatura.idAsig).subscribe(
        (asistencia: any[]) => {
          this.asistencia = asistencia;
        },
        (error: any) => {
          console.error('Error al cargar la asistencia', error);
        }
      );
    }
  }
}
