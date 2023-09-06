import { NgModule } from '@angular/core';
import { ReceivedComponent } from '../components/order/received/received.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ReceivedComponent,
    // ... (andere Komponenten, Direktiven, Pipes)
  ],
  imports: [
    CommonModule,
    // ... (andere notwendige Module)
  ],
  exports: [
    ReceivedComponent,
    // ... (andere zu exportierende Komponenten, Direktiven, Pipes)
  ]
})
export class SharedModule { }
