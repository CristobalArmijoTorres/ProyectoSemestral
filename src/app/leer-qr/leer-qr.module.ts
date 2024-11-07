import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { LeerQrPage } from './leer-qr.page';
import { LeerQrPageRoutingModule } from './leer-qr-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxScannerQrcodeModule,
    LeerQrPageRoutingModule
  ],
  declarations: [LeerQrPage]
})
export class LeerQrPageModule {}
