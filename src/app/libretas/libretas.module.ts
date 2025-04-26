import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibretasPageRoutingModule } from './libretas-routing.module';

import { LibretasPage } from './libretas.page';


import { HomePageModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibretasPageRoutingModule,
    HomePageModule,
    SharedModule
  ],
  declarations: [
    LibretasPage,
  ],
})
export class LibretasPageModule {}


