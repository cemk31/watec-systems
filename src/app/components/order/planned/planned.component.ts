import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.component.html',
  styleUrls: ['./planned.component.scss'],
})
export class PlannedComponent implements OnInit, OnDestroy {
  response: any = {};
  retrievedData: any;

  @Input() orderId: string;
  
  private unsubscribe$ = new Subject<void>();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.dataLoaded$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.response = this.orderService.getData();
        console.log('Retrieved data', this.response);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit() {
    
  }

}