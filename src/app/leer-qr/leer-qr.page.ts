import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { QrService } from '../leer-qr/qr.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage {
  @ViewChild('scanner') scanner!: NgxScannerQrcodeComponent;
  qrContent: string = ''; // Contenido escaneado del QR

  constructor(private qrService: QrService, private toastController: ToastController) {}

  // Manejar el resultado del escaneo de QR
  onScanSuccess(event: any) {
    this.qrContent = event?.[0]?.value || ''; // Extrae el valor escaneado de event
  }

  // Registrar asistencia usando el contenido del QR
  registrarAsistencia() {
    if (this.qrContent) {
      this.qrService.registrarAsistencia(this.qrContent).subscribe(
        async () => {
          const toast = await this.toastController.create({
            message: 'Asistencia registrada correctamente',
            duration: 2000,
            color: 'success',
          });
          await toast.present();
          this.qrContent = ''; // Limpiar el contenido después del registro
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: 'Error al registrar asistencia',
            duration: 2000,
            color: 'danger',
          });
          await toast.present();
        }
      );
    }
  }
}
