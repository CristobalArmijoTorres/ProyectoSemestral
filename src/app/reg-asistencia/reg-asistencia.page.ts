import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../reg-asistencia/registrar.service';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.page.html',
  styleUrls: ['./reg-asistencia.page.scss'],
})
export class RegAsistenciaPage implements OnInit {
  asignaturas: any[] = []; // Lista de asignaturas del docente
  qrData: string = ''; // Contenido dinámico del QR
  mostrar = false; // Controla la visibilidad del modal

  constructor(private registrarService: RegistrarService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    // Obtener el profesor actual del localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser && storedUser.id) {
      this.registrarService.getAsignaturasByProfesorId(storedUser.id).subscribe(
        (asignaturas: any[]) => {
          this.asignaturas = asignaturas;
        },
        (error: any) => {
          console.error('Error al cargar las asignaturas', error);
        }
      );
    }
  }

  generarQR(asignatura: any) {
    this.qrData = JSON.stringify({
        asignaturaId: asignatura.idAsig,
        nombre: asignatura.nombre,
        codigo: asignatura.codigo,
        fecha: new Date().toISOString() // Agrega la fecha para el registro
    });
    this.verModal(); // Abre el modal con el QR generado
}


  verModal() {
    this.mostrar = !this.mostrar;
  }
}
