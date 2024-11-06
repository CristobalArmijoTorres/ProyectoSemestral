import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BienvenidaService } from '../menu/bienvenida.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: string = ''; // Nombre del usuario cargado desde el servicio
  image: string = 'assets/slide1.png'; // Imagen de bienvenida

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private bienvenidaService: BienvenidaService // Inyectamos el servicio de bienvenida
  ) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    // Obtener el usuario desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      // Llamar al servicio para obtener los datos del usuario
      this.bienvenidaService.getUserById(storedUser.id).subscribe(
        (userData: any) => {
          this.usuario = userData.username; // Asigna el nombre al campo 'usuario'
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
            localStorage.removeItem('user'); // Eliminar el usuario de localStorage al cerrar sesión
            this.navController.navigateRoot(['/home']); // Redirigir a la página de inicio
          }
        }
      ]
    });
    await alert.present();
  }
}
