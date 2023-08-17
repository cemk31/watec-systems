import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstaPage } from './ista.page';

const routes: Routes = [
  {
    path: '',
    component: IstaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstaPageRoutingModule {}
