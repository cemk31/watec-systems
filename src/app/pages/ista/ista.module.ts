import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstaPageRoutingModule } from './ista-routing.module';

import { IstaPage } from './ista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaPageRoutingModule
  ],
  declarations: [IstaPage]
})
export class IstaPageModule {}
