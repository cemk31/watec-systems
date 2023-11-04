import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { IstaOrderDetailComponent } from '../../components/ista-order-detail/ista-order-detail.component';
import { GeneralComponent } from '../../components/order/general/general.component';
import { CancelledComponent } from '../../components/order/cancelled/cancelled.component';
import { ReceivedComponent } from '../../components/order/received/received.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
    ReactiveFormsModule
 ],
  declarations: [TestPage]
})
export class TestPageModule {}
