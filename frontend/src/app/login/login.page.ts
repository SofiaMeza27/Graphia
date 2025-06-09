import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'; // header/footer aquí
import { RouterModule } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    SharedModule, // componentes aquí (header/footer)
    RouterModule
  ]
})
export class LoginPage {
  username = '';
  password = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController ) {}

  // Método para mostrar un toast de éxito, aplicando la clase 'success-toast'
async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      cssClass: 'success-toast' // Usamos la clase de éxito
    });
    toast.present();
  }

  // Nuevo método para mostrar un toast de error, aplicando la clase 'error-toast'
  async presentErrorToast(errorMessage: string) {
    const toast = await this.toastController.create({
      message: errorMessage,
      duration: 3000, // Un poco más de duración para errores
      position: 'bottom',
      cssClass: 'error-toast' // Usamos la clase de error
    });
    toast.present();
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.presentSuccessToast('¡Login exitoso! Redirigiendo...'); // Llamamos al toast de éxito
        setTimeout(() => this.router.navigate(['/home']), 2000); // Cambia '/home' por tu ruta principal
      },
      error: (err) => {
        // En lugar de this.mensaje, mostramos el toast de error
        const errorMessage = err.error?.msg || 'Credenciales incorrectas';
        this.presentErrorToast(errorMessage); // Llamamos al toast de error
        // this.mensaje = errorMessage; // Puedes eliminar esta línea si solo usarás el toast
      }
    });
  }
}


