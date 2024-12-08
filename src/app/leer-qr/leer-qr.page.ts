import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
} from 'ngx-scanner-qrcode';
import { QrService } from './qr.service'; 

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
        width: window.innerWidth,
      },
    },
  };

  public qrCodeInput: string = ''; 
  public errorMessage: string = ''; 

  constructor(private qrcode: NgxScannerQrcodeService, private qrService: QrService) {}

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      console.log('QR Scanner Ready:', res);
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    if (e.length > 0) {
      const qrData = e[0].data; 

      
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
    }
  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label)));
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    };

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
      const datosQR = JSON.parse(this.qrCodeInput); 
      console.log('Datos del QR:', datosQR); 

      
      if (datosQR && datosQR.asignaturaId && datosQR.seccionId) {
        const estudiante = JSON.parse(localStorage.getItem('user') || '{}');
        const estudianteId = estudiante?.id;

        if (!estudianteId) {
          this.errorMessage = 'No se pudo obtener el ID del estudiante. Revisa los datos del usuario.';
          return;
        }
       
        const seccion = this.getSeccion(datosQR.seccionId);
        if (!seccion) {
          this.errorMessage = 'Sección no válida.';
          return;
        }

        const estudianteEnSeccion = seccion.estudiantes.find((e: any) => e.estudianteId === estudianteId);

        if (!estudianteEnSeccion) {
          this.errorMessage = 'No puedes registrar asistencia. No perteneces a esta sección.';
          return;
        }

       
        this.qrService.registrarAsistencia(datosQR.asignaturaId, datosQR.nombreAsignatura, datosQR.estudianteId, datosQR.seccionId).subscribe(
          response => {
            console.log('Asistencia registrada:', response);
          
          },
          error => {
            console.error('Error al registrar asistencia', error);
            this.errorMessage = error.message || 'No se pudo registrar la asistencia. Inténtalo de nuevo.';
          }
        );
      } else {
        this.errorMessage = 'Código QR no válido. Asegúrate de que el QR contenga la información requerida.';
      }
    } catch (e) {
      console.error('Error al parsear el QR:', e);
      this.errorMessage = 'El formato del código QR es incorrecto.';
    }
  }
  
  
  private getSeccion(seccionId: string) {
    
    const secciones = [
      {
        id: 'A',
        estudiantes: [
          { estudianteId: '3', nombre: 'Usuario2' }
        ]
      },
      {
        id: 'B',
        estudiantes: [
          { estudianteId: '4', nombre: 'Usuario1' }
        ]
      }
    ];

    return secciones.find(seccion => seccion.id === seccionId);
  }
}

