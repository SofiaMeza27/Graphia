import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-reviews',
  templateUrl: './carrusel-reviews.component.html',
  styleUrls: ['./carrusel-reviews.component.scss'],
  standalone: false,
})
export class CarruselReviewsComponent  {

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container.custom-opinion-swiper');
    if (swiperEl) {
      
      swiperEl.removeAttribute('init'); // Esto fuerza el init
      (swiperEl as any).initialize();            // Y se inicializa
    }
  }

}
