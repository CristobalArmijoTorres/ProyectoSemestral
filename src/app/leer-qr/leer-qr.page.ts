import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';

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

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  constructor(private qrcode: NgxScannerQrcodeService) {}

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      console.log('QR Scanner Ready:', res);
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    console.log(e);
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
}
