import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuftragPage } from './auftrag.page';

const routes: Routes = [
  {
    path: '',
    component: AuftragPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuftragPageRoutingModule {}
