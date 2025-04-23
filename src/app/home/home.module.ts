import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { FooterComponent } from '../components/footer/footer.component'; // Importa el FooterComponent

register();


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FooterComponent,
  ],
})
export class HomePageModule {}
