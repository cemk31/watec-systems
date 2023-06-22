import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstaOrderDetailPageRoutingModule } from './ista-order-detail-routing.module';

import { IstaOrderDetailPage } from './ista-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaOrderDetailPageRoutingModule
  ],
  declarations: [IstaOrderDetailPage]
})
export class IstaOrderDetailPageModule {}
