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

  cargarSecciones() {
    // Asume que `getSecciones` en el servicio obtiene las secciones de la API.
    this.registrarService.getSecciones().subscribe(
      (secciones: any[]) => {
        this.secciones = secciones;
      },
      (error: any) => {
        console.error('Error al cargar las secciones', error);
      }
    );
  }

  generarQR(asignatura: any) {
    const seccionId = asignatura.seccionSeleccionada;
    const seccion = this.secciones.find(sec => sec.id === seccionId);
    
    this.asignaturaSeleccionada = asignatura;
    this.seccionSeleccionada = seccion;
    
    this.qrData = JSON.stringify({
      asignaturaId: asignatura.idAsig,
      nombre: asignatura.nombre,
      codigo: asignatura.codigo,
      seccion: seccionId,
      fecha: new Date().toISOString()
    });
    this.verModal(); // Abre el modal con el QR generado
  }

  verModal() {
    this.mostrar = !this.mostrar;
  }
}
