import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-postponed',
  templateUrl: './postponed.component.html',
  styleUrls: ['./postponed.component.scss'],
})
export class PostponedComponent implements OnInit, OnDestroy {
  response: any = {};
  retrievedData: any;
  
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

  addPostponed() {
    console.log('Add status');
  }
}