import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UntersuchungListPage } from './untersuchung-list.page';

const routes: Routes = [
  {
    path: '',
    component: UntersuchungListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UntersuchungListPageRoutingModule {}
