import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'; // Si tienes header/footer aquí
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    SharedModule // Si tus componentes personalizados están aquí
  ]
})
export class RegistroPage {
  username = '';
  password = '';
  confirmPassword = '';
  rut = '';
  email = '';
  region = '';
  comuna = '';
  aceptaTerminos = false;
  mensaje = '';
  errores: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.errores = {}; // Limpia errores previos

    // Validaciones
    if (!this.username) this.errores.username = 'El nombre de usuario es obligatorio.';
    else if (this.username.length < 4) this.errores.username = 'El nombre de usuario debe tener al menos 4 caracteres.';

    if (!this.rut) this.errores.rut = 'El RUT es obligatorio.';
    else if (!/^\d{7,8}-[0-9kK]$/.test(this.rut)) this.errores.rut = 'RUT inválido. Debe tener el formato 12345678-9.';

    if (!this.email) this.errores.email = 'El correo es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) this.errores.email = 'Correo electrónico inválido.';

    if (!this.region) this.errores.region = 'La región es obligatoria.';
    if (!this.comuna) this.errores.comuna = 'La comuna es obligatoria.';

    if (!this.password) {
      this.errores.password = 'La contraseña es obligatoria.';
    } else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.password)) {
      this.errores.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.';
    }

    if (!this.confirmPassword) {
      this.errores.confirmPassword = 'Debes confirmar la contraseña.';
    } else if (this.password !== this.confirmPassword) {
      this.errores.confirmPassword = 'Las contraseñas no coinciden.';
    }

    // Si hay errores, no envía el formulario
    if (Object.keys(this.errores).length > 0) return;

    if (!this.aceptaTerminos) {
      this.mensaje = 'Debes aceptar los términos y condiciones.';
      return;
    }

    this.authService.register(
      this.username,
      this.password,
      this.rut,
      this.email,
      this.region,
      this.comuna
    ).subscribe({
      next: (res) => {
        this.mensaje = '¡Registro exitoso!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.mensaje = err.error?.msg || 'Error en el registro';
      }
    });
  }
}