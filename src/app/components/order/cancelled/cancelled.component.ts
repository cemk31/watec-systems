import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.scss'],
})
export class CancelledComponent implements OnInit {
  response: any;
  retrievedData: any;
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return format(date, 'dd.MM.yyyy');
  }
}