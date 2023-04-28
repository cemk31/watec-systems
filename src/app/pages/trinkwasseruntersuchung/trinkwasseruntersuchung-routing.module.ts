import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrinkwasseruntersuchungPage } from './trinkwasseruntersuchung.page';

const routes: Routes = [
  {
    path: '',
    component: TrinkwasseruntersuchungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrinkwasseruntersuchungPageRoutingModule {}
