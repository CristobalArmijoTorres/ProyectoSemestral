import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuProfePage } from './menu-profe.page';

describe('MenuProfePage', () => {
  let component: MenuProfePage;
  let fixture: ComponentFixture<MenuProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
