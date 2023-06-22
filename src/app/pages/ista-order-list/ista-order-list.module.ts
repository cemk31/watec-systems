import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstaOrderListPageRoutingModule } from './ista-order-list-routing.module';

import { IstaOrderListPage } from './ista-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaOrderListPageRoutingModule
  ],
  declarations: [IstaOrderListPage]
})
export class IstaOrderListPageModule {}
