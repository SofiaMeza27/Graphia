import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarruselProductosComponent } from '../components/carrusel-productos/carrusel-productos.component';
import { CarruselReviewsComponent } from '../components/carrusel-reviews/carrusel-reviews.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarruselProductosComponent, CarruselReviewsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
exports: [
    HeaderComponent,
    FooterComponent,
    CarruselProductosComponent,
    CarruselReviewsComponent,
  ],
})
export class SharedModule { }
