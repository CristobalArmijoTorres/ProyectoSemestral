import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BienvenidaService } from '../menu/bienvenida.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: string = ''; 
  image: string = 'assets/slide1.png'; 

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private bienvenidaService: BienvenidaService 
  ) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      
      this.bienvenidaService.getUserById(storedUser.id).subscribe(
        (userData: any) => {
          this.usuario = userData.username; 
        },
        (error: any) => {
          console.error('Error al obtener los datos del usuario', error);
        }
      );
    }
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('user'); 
            this.navController.navigateRoot(['/home']); 
          }
        }
      ]
    });
    await alert.present();
  }
}
