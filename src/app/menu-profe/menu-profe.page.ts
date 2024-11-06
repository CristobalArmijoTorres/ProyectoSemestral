import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; 
import { BienvenidaProfeService } from '../menu-profe/bienvenida-profe.service'; // Ruta y nombre corregidos

@Component({
  selector: 'app-menu-profe',
  templateUrl: './menu-profe.page.html',
  styleUrls: ['./menu-profe.page.scss'],
})
export class MenuProfePage implements OnInit {
  usuario: string = ''; // Nombre del profesor
  image: string = 'assets/slide1.png'; // Imagen de bienvenida

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private bienvenidaProfeService: BienvenidaProfeService // Inyectamos el servicio
  ) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser && storedUser.id) {
      this.bienvenidaProfeService.getUserById(storedUser.id).subscribe(
        (userData) => {
          this.usuario = userData.username; // Asigna el nombre al campo 'usuario'
        },
        (error) => {
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
            localStorage.removeItem('user'); // Elimina el usuario de localStorage
            this.navController.navigateRoot(['/home']); // Redirige al inicio de sesión
          }
        }
      ]
    });
    await alert.present();
  }
}
