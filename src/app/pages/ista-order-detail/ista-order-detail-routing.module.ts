import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstaOrderDetailPage } from './ista-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IstaOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstaOrderDetailPageRoutingModule {}
