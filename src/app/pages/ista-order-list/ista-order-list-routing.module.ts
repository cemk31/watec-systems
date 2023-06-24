import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstaOrderListPage } from './ista-order-list.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: IstaOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
})
export class IstaOrderListPageRoutingModule {}
