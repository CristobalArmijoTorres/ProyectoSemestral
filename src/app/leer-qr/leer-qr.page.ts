import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
} from 'ngx-scanner-qrcode';
import { QrService } from './qr.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements AfterViewInit {
  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
  };

  public qrCodeInput: string = ''; // Almacena el resultado del QR
  public errorMessage: string = ''; // Mensaje de error
  public successMessage: string = ''; // Mensaje de éxito
  public asignatura: any = null; // Información de la asignatura para mostrar

  constructor(private qrcode: NgxScannerQrcodeService, private qrService: QrService) {}

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      console.log('QR Scanner Ready:', res);
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    if (e.length > 0) {
      const qrData = e[0].data; // Asignar el contenido del QR a la variable
  
      console.log('QR Data:', qrData);
      console.log('Tipo de QR Data:', typeof qrData);
  
      if (qrData instanceof Int8Array) {
        this.qrCodeInput = new TextDecoder().decode(qrData);
        console.log('QR Code scanned:', this.qrCodeInput);
      } else if (typeof qrData === 'string') {
        this.qrCodeInput = qrData;
        console.log('QR Code scanned:', this.qrCodeInput);
      } else {
        console.error('El contenido del QR no es un string válido.');
        this.errorMessage = 'El contenido del QR no es válido.';
      }

      // Mostrar la asignatura correspondiente del QR
      try {
        const datosQR = JSON.parse(this.qrCodeInput); // Asumimos que el QR es un JSON
        if (datosQR && datosQR.asignaturaId) {
          this.asignatura = datosQR; // Almacenamos la asignatura
        }
      } catch (e) {
        console.error('Error al parsear el QR:', e);
        this.errorMessage = 'El código QR no tiene el formato correcto.';
      }
    }
  }

  public registrarAsistencia() {
    try {
      const datosQR = JSON.parse(this.qrCodeInput); // Suponiendo que el QR es un JSON

      // Validar que el QR contenga los datos necesarios
      if (datosQR && datosQR.asignaturaId) {
        const estudianteId = JSON.parse(localStorage.getItem('user') || '{}').id; // Obtener el ID del estudiante
        const secciones = JSON.parse(localStorage.getItem('secciones') || '[]'); // Asumiendo que las secciones están guardadas en localStorage

        // Buscar la sección del estudiante
        const seccionEstudiante = secciones.find((seccion: any) => 
          seccion.estudiantes.some((estudiante: any) => estudiante.estudianteId === estudianteId)
        );

        // Verificar si el QR pertenece a la sección del estudiante
        const asignatura = seccionEstudiante?.estudiantes
          .find((estudiante: any) => estudiante.estudianteId === estudianteId)
          ?.asignaturas.find((asig: any) => asig.idAsig === datosQR.asignaturaId);

        if (asignatura) {
          // Llama al servicio para registrar la asistencia
          this.qrService.registrarAsistencia(datosQR.asignaturaId, estudianteId).subscribe(
            response => {
              console.log('Asistencia registrada:', response);
              this.successMessage = 'Se registró correctamente su asistencia.'; // Mensaje de éxito
              this.errorMessage = ''; // Limpiar el mensaje de error
            },
            error => {
              console.error('Error al registrar asistencia', error);
              this.errorMessage = error.message || 'No se pudo registrar la asistencia. Inténtalo de nuevo.';
              this.successMessage = ''; // Limpiar el mensaje de éxito
            }
          );
        } else {
          this.errorMessage = 'No pertenece a tu sección. No puedes registrar asistencia.';
          this.successMessage = ''; // Limpiar el mensaje de éxito
        }
      } else {
        this.errorMessage = 'Código QR no válido. Asegúrate de que el QR contenga la información necesaria.';
        this.successMessage = ''; // Limpiar el mensaje de éxito
      }
    } catch (e) {
      console.error('Error al parsear el QR:', e);
      this.errorMessage = 'El código QR no tiene el formato correcto.';
      this.successMessage = ''; // Limpiar el mensaje de éxito
    }
  }

  public limpiar() {
    this.qrCodeInput = '';
    this.asignatura = null;
    this.errorMessage = '';
    this.successMessage = ''; // Limpiar el mensaje de éxito
  }

  // Métodos para iniciar y detener el escaneo
  public iniciarEscaneo() {
    this.action.start();
  }

  public detenerEscaneo() {
    this.action.stop();
  }
}
