import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.scss'],
})
export class RejectedComponent implements OnInit {
  response: any;

  constructor(private orderService: OrderService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.orderService.dataLoaded$.subscribe(() => {
      this.response = this.orderService.getData();
      if(this.response) {
        console.log('Retrieved data', this.response);
        this.cd.detectChanges();
      } else {
        console.error('No data retrieved');
      }
    });
  }
  unsubscribe$(unsubscribe$: any): any {
    throw new Error('Method not implemented.');
  }

}
