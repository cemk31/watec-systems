import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';

import { DashboardPage } from './dashboard';
import { DashboardPageRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [DashboardPage],
})
export class DashboardModule {}
