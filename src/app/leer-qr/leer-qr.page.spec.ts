import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerQrPage } from './leer-qr.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QrService } from './qr.service';
import { LeerQrPageModule } from './leer-qr.module';  

describe('LeerQrPage', () => {
  let component: LeerQrPage;
  let fixture: ComponentFixture<LeerQrPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LeerQrPageModule],  
      providers: [QrService]  
    });

    fixture = TestBed.createComponent(LeerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
