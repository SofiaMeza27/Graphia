import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  segmentValue = 'home';

  constructor(
    public auth: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.router.events.subscribe(() => {
      if (this.router.url.startsWith('/productos')) {
        this.segmentValue = 'productos';
      } else if (this.router.url.startsWith('/marcas')) {
        this.segmentValue = 'marcas';
      } else {
        this.segmentValue = 'home';
      }
    });
  }

  ngOnInit() {}

  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log('Buscando:', searchTerm);
  }

  // Toast para confirmar cierre de sesión (¡ahora es un toast de éxito!)
  async presentLogoutToast() {
    const toast = await this.toastController.create({
      message: '¡Sesión cerrada correctamente!',
      duration: 2000,
      position: 'bottom',
      cssClass: 'success-toast' // Usamos la clase de éxito
    });
    toast.present();
  }

  // Nuevo método para mostrar un toast de error (ejemplo)
  async presentErrorToast(errorMessage: string) {
    const toast = await this.toastController.create({
      message: `Error: ${errorMessage}`,
      duration: 3000, // Un poco más de duración para errores
      position: 'bottom',
      cssClass: 'error-toast' // Usamos la clase de error
    });
    toast.present();
  }

  logout() {
    this.auth.logout();
    this.presentLogoutToast(); // Muestra el toast de éxito
    this.router.navigate(['/login']);
  }

  // Ejemplo de cómo llamar a un toast de error (usarlo donde sea necesario)
  // Por ejemplo, si una llamada a la API falla:
  // async someActionThatMightFail() {
  //   try {
  //     // ...  lógica de la acción
  //   } catch (error) {
  //     this.presentErrorToast('No se pudo completar la operación.');
  //   }
  // }
}
