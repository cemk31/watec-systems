import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
})
export class OrderTableComponent implements OnInit {

  orders: any[];  // change this according to your data type
  filteredOrders: any[];

  toggleReceived = false;
  togglePlanned = false;
  exceptionMessage = null;
  selectedId: number | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.getIstaOrders();
  }

  filterTerm: string;

  search() {
    this.filteredOrders = this.orders.filter(order => {
      return order.id.toString().includes(this.filterTerm)
        || order.actualStatus.toLowerCase().includes(this.filterTerm.toLowerCase())
        || order.propertyNumber.toString().includes(this.filterTerm)
        || order.company.toLowerCase().includes(this.filterTerm.toLowerCase())
        || order.customerContact.toLowerCase().includes(this.filterTerm.toLowerCase())
        || order.city.toLowerCase().includes(this.filterTerm.toLowerCase())
        || order.phone.toString().includes(this.filterTerm)
        || order.mobile.toString().includes(this.filterTerm)
        || order.email.toLowerCase().includes(this.filterTerm.toLowerCase());
    });
  }  

  userRecords: Array<any> = [
    { id: 1, status:'RECEIVED', propertyNumber: '123', company: 'Firma1', customerContact: 'John', city: 'City1', phone: '1234567890', mobile: '0987654321', email: 'john@email.com' },
    // ...more records
  ];

  showDetails: boolean[] = [];

  closeDetails(id: number) {
    this.selectedId = null;
  }

  openDetails(id: number) {
    this.selectedId = id;
  }

  getIstaOrders() {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
    this.http.get<any[]>(environment.backend + environment.url.ista.url, { headers })
    .pipe(
      map(response => {
        this.orders = response;
        
        this.orders.forEach(order => {
          order.actualStatus = order.actualStatus.toLowerCase();
          if (order.actualStatus === 'received') {
            order.actualStatus = 'Empfangen';
            order.actualStatusColor = 'success';
          } else if (order.actualStatus === 'planned') {
            order.actualStatus = 'In planung';
            order.actualStatusColor = 'warning';
          } else if (order.actualStatus === 'postponed') {
            order.actualStatus = 'Verschoben';
            order.actualStatusColor = 'warning';
          } else if (order.actualStatus === 'closed') {
            order.actualStatus = 'Abgeschlossen';
            order.actualStatusColor = 'success';
          } else if (order.actualStatus === 'cancelled') {
            order.actualStatus = 'Storno';
            order.actualStatusColor = 'danger';
          }
        });

        return this.orders;
      }),
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe();
  }

  showFilter = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (dateString === null) {
      return '';
    }
    return format(date, 'dd.MM.yyyy');
  }

  ascending : boolean;
  sortById() {
    if (!this.ascending) {
      this.orders.sort((a, b) => {
        this.ascending = true;
        return a.id - b.id;
      });
    } else {
      this.orders.sort((a, b) => {
        this.ascending = false;
        return b.id - a.id;
      });
    }
  }

  sortByStatus() {
    this.orders.sort((a, b) => {
      const statusA = a.actualStatus || ''; // Fallback zu leerem String, wenn undefined
      const statusB = b.actualStatus || '';
      return this.ascending ? statusA.localeCompare(statusB) : statusB.localeCompare(statusA);
    });
    this.ascending = !this.ascending; // Umschalten des Zustands
  }
  
  sortByCreatedDate() {
    this.orders.sort((a, b) => {
      const dateA = new Date(a.createdAt || '');
      const dateB = new Date(b.createdAt || '');
  
      if (this.ascending) {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  
    this.ascending = !this.ascending;
  }  
  
  sortByCustomerContact() {
    this.orders.sort((a, b) => {
      const contactA = a.customerContact || '';
      const contactB = b.customerContact || '';
      return this.ascending ? contactA.localeCompare(contactB) : contactB.localeCompare(contactA);
    });
    this.ascending = !this.ascending;
  }

  showOnlyOpenOrdersChanged() {
    this.filteredOrders = this.orders.filter(order => order.actualStatus !== 'Abgeschlossen' && order.actualStatus !== 'Storno');
  }

  selectedOrders: Set<number> = new Set();
  disableDocumentExport = true;
  selectAllOrders() {
    if (this.selectedOrders.size !== this.orders.length) {
      this.selectedOrders.clear();
      this.orders.forEach(order => this.selectedOrders.add(order.id));
      this.disableDocumentExport = false;
    } else {
      this.selectedOrders.clear();
      this.disableDocumentExport = true;
    }
  }
  
  checkBoxOrder(id: number) {
    if (this.selectedOrders.has(id)) {
      this.selectedOrders.delete(id);
      if (this.selectedOrders.size === 0) {
        this.disableDocumentExport = true;
      }
    } else {
      this.selectedOrders.add(id);
      this.disableDocumentExport = false;
    }
  }
  
  setCheckboxState(id: number): boolean {
    return this.selectedOrders.has(id);
  }

  //TODO: Create order Button
  createOrder() {
    
  }

  //TODO: Implement quick edit
  quickEdit() {
    if (this.selectedOrders.size === 1) {
      this.selectedOrders.forEach(id => {
        this.selectedId = id;
      });
    } else {
      this.selectedId = null;
    }
  }
  //TODO: Implement delete
  delete() {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
  
    const idsToDelete = Array.from(this.selectedOrders);
    this.deleteNext(idsToDelete, headers);
  }
  
  deleteNext(ids: number[], headers: HttpHeaders) {
    if (ids.length === 0) {
      this.getIstaOrders(); // Alle Löschvorgänge abgeschlossen, Liste aktualisieren
      return;
    }
  
    const id = ids.shift(); // Entfernen Sie die ID vom Anfang des Arrays
    this.http.delete(environment.backend + environment.url.ista.order + '/' + id, { headers }).subscribe(
      () => {
        this.deleteNext(ids, headers); // Erfolgreich gelöscht, nächste ID löschen
      },
      (error) => {
        this.exceptionMessage = error.error.message; // Fehlerbehandlung
        // Optional: Entscheiden, ob Sie den Vorgang fortsetzen oder abbrechen möchten
        this.deleteNext(ids, headers); // Fehler auftreten, aber mit dem nächsten fortfahren
      }
    );
  }
  

  exportSelectedToExcel() {
    // Filter the userRecords array based on the selected orders
    const selectedOrders = this.selectedOrders.size > 0 ? this.orders.filter(order => this.selectedOrders.has(order.id)) : this.orders;

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert the selected orders to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(selectedOrders);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Selected Orders');

    // Generate the Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Convert the Excel buffer to a Blob
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Save the Excel file as a download
    saveAs(excelBlob, 'selected_orders.xlsx');
  }

  //TODO: Export to PDF
  exportSelectedToPdf() {
    if (!this.orders || !this.selectedOrders) return;
  
    const selectedOrders = this.selectedOrders.size > 0 ? this.orders.filter(order => this.selectedOrders.has(order.id)) : this.orders;
  
    const doc = new jsPDF();
  
    const headers = [['ID', 'Status', 'Property Number', 'Company', 'Customer Contact', 'City', 'Phone', 'Mobile', 'Email']];
  
    const data = selectedOrders.map(order => [order.id, order.actualStatus, order.propertyNumber, order.company, order.customerContact, order.city, order.phone, order.mobile, order.email]);
  
    // const tableStyle = {
    //   margin: { top: 10 },
    //   headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 12 },
    //   bodyStyles: { fontSize: 10 },
    //   columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' }, /* weitere Spaltenkonfigurationen */ }
    // };
  
    autoTable(doc, {
      head: headers,
      body: data,
      margin: { top: 10 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 12 },
      bodyStyles: { fontSize: 10 },
      columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' }, /* weitere Spaltenkonfigurationen */ }
      // ...tableStyle
    });
    doc.save('selected_orders.pdf');  
  }
  
  getSelectedOrders() {
    return this.selectedOrders.size > 0 
      ? this.orders.filter(order => this.selectedOrders.has(order.id))
      : this.orders;
  }

  exportToPDF(id: Number) {
    this.orders.forEach(order => {
      if (order.id === id) {
        const doc = new jsPDF();
        const headers = [['ID', 'Status', 'Property Number', 'Company', 'Customer Contact', 'City', 'Phone', 'Mobile', 'Email']];
        const data = [[order.id, order.actualStatus, order.propertyNumber, order.company, order.customerContact, order.city, order.phone, order.mobile, order.email]];
        autoTable(doc, {
          head: headers,
          body: data,
          margin: { top: 10 },
          headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 12 },
          bodyStyles: { fontSize: 10 },
          columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' }, /* weitere Spaltenkonfigurationen */ }
        });
        doc.save('order_' + order.id + '.pdf');
      }
    });
  }

  sortByPropertyNumber() {
    if (!this.ascending) {
      this.orders.sort((a, b) => {
        this.ascending = true;
        return a.propertyNumber.localeCompare(b.propertyNumber);
      });
    } else {
      this.orders.sort((a, b) => {
        this.ascending = false;
        return b.propertyNumber.localeCompare(a.propertyNumber);
      });
    }
  }
}
  