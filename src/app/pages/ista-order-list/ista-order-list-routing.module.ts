import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstaOrderListPage } from './ista-order-list.page';

const routes: Routes = [
  {
    path: '',
    component: IstaOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstaOrderListPageRoutingModule {}
