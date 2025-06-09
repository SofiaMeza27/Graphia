import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-productos',
  templateUrl: './carrusel-productos.component.html',
  styleUrls: ['./carrusel-productos.component.scss'],
  standalone: false
})
export class CarruselProductosComponent {

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      swiperEl.removeAttribute('init'); // Esto fuerza el init
      swiperEl.initialize();            // Y se inicializa
    }
  }

}
