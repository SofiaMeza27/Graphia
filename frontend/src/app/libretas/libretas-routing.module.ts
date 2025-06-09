import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibretasPage } from './libretas.page';

const routes: Routes = [
  {
    path: '',
    component: LibretasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibretasPageRoutingModule {}
