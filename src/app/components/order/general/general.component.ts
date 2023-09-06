import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  response: any;
  retrievedData: any;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.dataLoaded$.subscribe(() => {
      this.response = this.orderService.getData();
      console.log('Retrieved data', this.response);
    });
  }
}
