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

  constructor(private qrcode: NgxScannerQrcodeService, private qrService: QrService) {}

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      console.log('QR Scanner Ready:', res);
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    if (e.length > 0) {
      const qrData = e[0].data; // Asignar el contenido del QR a la variable
  
      // Log para verificar el tipo y contenido del QR
      console.log('QR Data:', qrData);
      console.log('Tipo de QR Data:', typeof qrData);
  
      // Verifica si qrData es un Int8Array y conviértelo a string
      if (qrData instanceof Int8Array) {
        // Convertir el Int8Array a un string
        this.qrCodeInput = new TextDecoder().decode(qrData); // Decodificar el contenido
        console.log('QR Code scanned:', this.qrCodeInput);
      } else if (typeof qrData === 'string') {
        this.qrCodeInput = qrData; // Asignar el contenido del QR a la variable
        console.log('QR Code scanned:', this.qrCodeInput);
      } else {
        console.error('El contenido del QR no es un string válido.');
        this.errorMessage = 'El contenido del QR no es válido.';
      }
    }
  }
  
  

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label)));
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe(
        (r: any) => console.log(fn, r),
        (error: any) => console.error(error)
      );
    } else {
      action[fn]().subscribe(
        (r: any) => console.log(fn, r),
        (error: any) => console.error(error)
      );
    }
  }

  public registrarAsistencia() {
    try {
      const datosQR = JSON.parse(this.qrCodeInput); // Suponiendo que el QR es un JSON

      // Validar que el QR contenga los datos necesarios
      if (datosQR && datosQR.asignaturaId) {
        const estudianteId = JSON.parse(localStorage.getItem('user') || '{}').id; // Obtener el ID del estudiante

        // Llama al servicio para registrar asistencia
        this.qrService.registrarAsistencia(datosQR.asignaturaId, estudianteId).subscribe(
          response => {
            console.log('Asistencia registrada:', response);
            // Mostrar mensaje de éxito o realizar alguna acción adicional
          },
          error => {
            console.error('Error al registrar asistencia', error);
            this.errorMessage = error.message || 'No se pudo registrar la asistencia. Inténtalo de nuevo.';
          }
        );
      } else {
        this.errorMessage = 'Código QR no válido. Asegúrate de que el QR contenga la información necesaria.';
      }
    } catch (e) {
      console.error('Error al parsear el QR:', e);
      this.errorMessage = 'El código QR no tiene el formato correcto.';
    }
  }
}