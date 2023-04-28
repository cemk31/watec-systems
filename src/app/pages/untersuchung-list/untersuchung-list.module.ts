import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UntersuchungListPageRoutingModule } from './untersuchung-list-routing.module';

import { UntersuchungListPage } from './untersuchung-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UntersuchungListPageRoutingModule
  ],
  declarations: [UntersuchungListPage]
})
export class UntersuchungListPageModule {}
