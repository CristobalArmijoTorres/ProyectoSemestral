import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeerQrPageRoutingModule } from './leer-qr-routing.module';
import { LeerQrPage } from './leer-qr.page';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode'; // Asegúrate de importar aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerQrPageRoutingModule,
    NgxScannerQrcodeModule, // Asegúrate de que está aquí
  ],
  declarations: [LeerQrPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
})
export class LeerQrPageModule {}
