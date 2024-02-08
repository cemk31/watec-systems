  import { Component, OnDestroy, OnInit } from '@angular/core';
  import { OrderService } from '../../../services/order/order.service';
  import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { format } from 'date-fns';

  @Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss'],
  })
  export class GeneralComponent implements OnInit, OnDestroy {
    [x: string]: any;
    response: any = {};
    retrievedData: any;
    orderStatus: string = 'received'; // Setzen Sie den Standardstatus hier

    private unsubscribe$ = new Subject<void>();
  
    constructor(private orderService: OrderService) { }
  
    ngOnInit() {
      this.orderService.dataLoaded$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.response = this.orderService.getData();
          console.log('Retrieved data', this.response);
        });
        console.log("reponse xxx", this.response);
    }
  
    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }

    onStatusChange(event: any) {
      console.log('Order Status Changed:', event.detail.value);
      // Führen Sie hier Logik aus, um den Status zu behandeln, z. B. ein Update an den Server senden
    }
  
    onEdit() {
      // Bearbeiten-Logik hier
    }
  
    onDelete() {
      // Löschen-Logik hier
    }

    formatDate(dateString: string): string {
      const date = new Date(dateString);
      if (dateString === null || dateString === undefined) {
        return '';
      }
      return format(date, 'dd.MM.yyyy');
    }

    syncLog: string = 'Eine neue Zeile im Protokoll.\n';  // Protokoll als String

    onSyncWithIsta() {
      console.log('Synchronisieren mit ISTA');
      this.syncLog += 'Synchronisieren mit ISTA\n';
    }

    statusIcon = 'checkmark-circle-outline';  // Setzen Sie das Standard-Statussymbol hier
    statusColor = 'success';  // Setzen Sie die Standardfarbe des Statussymbols hier
    
    returnOrderStatus(actualStatus: string) {
      if (actualStatus === 'RECEIVED') {
        this.statusIcon = 'checkmark-circle-outline';
        this.statusColor = 'success';
        return 'Eingegangen';
      } else if (actualStatus === 'PLANNED') {
        this.statusIcon = 'calendar';
        this.statusColor = 'warning';
        return 'Geplant';
      } else if (actualStatus === 'POSTPONED') {
        this.statusIcon = 'pause-outline';
        this.statusColor = 'warning';
        return 'Verschoben';
      } else if (actualStatus === 'CANCELLED') {
        this.statusIcon = 'calendar';
        this.statusColor = 'danger';
        return 'Abgebrochen';
      } else if (actualStatus === 'DONE') {
        this.statusIcon = 'checkmark-circle-outline';
        this.statusColor = 'success';
        return 'Ausführung vor Ort erledigt';
      }
      else {
        return 'Unbekannt';
      }
    }
  }