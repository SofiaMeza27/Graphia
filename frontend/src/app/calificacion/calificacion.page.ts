import { Component } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificacion.page.html',
  styleUrls: ['./calificacion.page.scss'],
  standalone: false,
})
export class CalificacionPage {
  rating = 0; // Calificación inicial

  constructor() {}

  setRating(value: number) {
    this.rating = value; // Actualiza la calificación
  }

  submitFeedback() {
    console.log('Calificación:', this.rating);
    console.log('Comentario enviado');
    alert('¡Gracias por tu calificación!');
  }
}