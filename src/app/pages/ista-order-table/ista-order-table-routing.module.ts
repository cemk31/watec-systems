import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstaOrderTablePage } from './ista-order-table.page';

const routes: Routes = [
  {
    path: '',
    component: IstaOrderTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstaOrderTablePageRoutingModule {}
