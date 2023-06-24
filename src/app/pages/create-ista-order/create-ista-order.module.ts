import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateIstaOrderPageRoutingModule } from './create-ista-order-routing.module';

import { CreateIstaOrderPage } from './create-ista-order.page';
import { IstaStatusDetailComponent } from '../../components/ista-status-detail/ista-status-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateIstaOrderPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CreateIstaOrderPage, IstaStatusDetailComponent],
  exports: [IstaStatusDetailComponent]
})
export class CreateIstaOrderPageModule {}
