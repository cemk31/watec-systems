import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
})
export class ReceivedComponent implements OnInit {
  response: any = {};
  retrievedData: any;
  constructor(private orderService: OrderService, private cd: ChangeDetectorRef) { }
  showDetails = true;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

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

  onEdit() {
    // Ihre Bearbeiten-Logik hier
  }

  onDelete() {
    // Ihre Löschen-Logik hier
  }

  addStatus() {
    console.log('Add status');
  }

}
