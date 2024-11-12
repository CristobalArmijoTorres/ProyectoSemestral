import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../reg-asistencia/registrar.service';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.page.html',
  styleUrls: ['./reg-asistencia.page.scss'],
})
export class RegAsistenciaPage implements OnInit {
  asignaturas: any[] = []; // Lista de asignaturas del docente
  secciones: any[] = []; // Lista de secciones
  qrData: string = ''; // Contenido dinámico del QR
  mostrar = false; // Controla la visibilidad del modal
  asignaturaSeleccionada: any = null; // Asignatura seleccionada para el QR
  seccionSeleccionada: any = null; // Sección seleccionada para el QR

  constructor(private registrarService: RegistrarService) {}

  ngOnInit() {
    this.cargarAsignaturas();
    this.cargarSecciones();
  }

  // Método para cargar las asignaturas del docente
  cargarAsignaturas() {
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

  // Método para cargar las secciones
  cargarSecciones() {
    this.registrarService.getSecciones().subscribe(
      (secciones: any[]) => {
        this.secciones = secciones;
      },
      (error: any) => {
        console.error('Error al cargar las secciones', error);
      }
    );
  }

  // Método para generar el QR con los datos necesarios
  generarQR(asignatura: any) {
    const seccionId = asignatura.seccionSeleccionada;
    const seccion = this.secciones.find(sec => sec.id === seccionId);
    
    this.asignaturaSeleccionada = asignatura;
    this.seccionSeleccionada = seccion;

    // Obtener el estudianteId desde el localStorage
    const estudianteId = JSON.parse(localStorage.getItem('user') || '{}').id;

    // Construcción del JSON para el QR
    this.qrData = JSON.stringify({
      asignaturaId: asignatura.idAsig,
      seccionId: seccionId,
      estudianteId: estudianteId,
      fecha: new Date().toISOString()
    });

    this.verModal(); // Abre el modal con el QR generado
  }

  // Método para mostrar/ocultar el modal
  verModal() {
    this.mostrar = !this.mostrar;
  }
}
