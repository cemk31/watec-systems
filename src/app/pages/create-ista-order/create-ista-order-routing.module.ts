import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateIstaOrderPage } from './create-ista-order.page';

const routes: Routes = [
  {
    path: '',
    component: CreateIstaOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateIstaOrderPageRoutingModule {}
