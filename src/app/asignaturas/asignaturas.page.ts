// asignaturas.page.ts
import { Component, OnInit } from '@angular/core';
import { AsigAlumnoService } from '../asignaturas/asig-alumno.service';
import { Asignatura } from './models';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: Asignatura[] = [];
  profesores: { [profesorId: string]: string } = {}; // Objeto para relacionar profesorId con nombre

  constructor(private asigAlumnoService: AsigAlumnoService) {}

  ngOnInit() {
    this.cargarAsignaturas();
    this.cargarProfesores();
  }

  cargarAsignaturas() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      this.asigAlumnoService.getAsignaturasByStudentId(storedUser.id).subscribe(
        (asignaturas: Asignatura[]) => {
          console.log('Asignaturas cargadas:', asignaturas);
          this.asignaturas = asignaturas.map(asignatura => ({ ...asignatura, mostrarModal: false }));
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  cargarProfesores() {
    this.asigAlumnoService.getAllProfesores().subscribe(
      (profesores) => {
        // Crear el objeto de referencia de profesores
        profesores.forEach(profesor => {
          this.profesores[profesor.profesorId] = profesor.nombre;
        });
      },
      (error: any) => {
        console.error('Error al cargar los profesores', error);
      }
    );
  }

  verModal(asignatura: Asignatura) {
    asignatura.mostrarModal = !asignatura.mostrarModal;
  }

  obtenerNombreProfesor(profesorId: string): string {
    return this.profesores[profesorId] || 'Desconocido';
  }
}
