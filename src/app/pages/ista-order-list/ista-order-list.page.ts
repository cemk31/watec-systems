import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ista-order-list',
  templateUrl: './ista-order-list.page.html',
  styleUrls: ['./ista-order-list.page.scss'],
})
export class IstaOrderListPage implements OnInit {
  filterTerm: string;
  orders: any[];  // change this according to your data type
  filteredOrders: any[];
  filteredItems: any[] = []; // This would hold the filtered data

  toggleReceived = false;
  togglePlanned = false;

  exceptionMessage = null;
  opened = '';

  statuses = ['Received', 'Planned', 'Postponed', 'Closed']; // Add more statuses as needed
  
  data: any[];
  keysToDisplay = ['id', 'createdAt', 'updatedAt', 'actualStatus'];
  editMode = false;

  statusForm: FormGroup;
  
  showForm = false; // variable to toggle form
  newActivity = { select: '', id: '', description: '', status: '', contactAttemptOn: '', contactPersonCustomer: '', agentCP: '', result: '', remark: '' };

  selectedStatus: string;

  orderId: string;
  id: number; // or string, depending on your data

  items: {
    Postponed: Array<any>,
    Cancelled: Array<any>,
    Rejected: Array<any>,
    ClosedContractPartner: Array<any>,
    NotPossible: Array<any>
  } = {
    Postponed: [],
    Cancelled: [],
    Rejected: [],
    ClosedContractPartner: [],
    NotPossible: []
  };

  detailsVisible: boolean[] = [];
  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.statusForm = new FormGroup({
      id: new FormControl(''),
      remarkExternal: new FormControl(''),
      actualStatus: new FormControl(''),
      Received: new FormArray([]),
      Planned: new FormArray([]),
      Execution: new FormArray([]),
      Closed: new FormArray([]),
    });

    this.statusForm.get('actualStatus').valueChanges.subscribe(val => {
      this.adjustForm(val);
    });
  }

  adjustForm(val) {
    const control = this.statusForm.get(val);
    if (control instanceof FormArray) {
      control.push(new FormGroup({
        id: new FormControl(''),
        orderstatusType: new FormControl(''),
        CustomerContact: new FormArray([
          new FormGroup({
            contactAttemptOn: new FormControl(''),
            contactPersonCustomer: new FormControl(''),
            agentCP: new FormControl(''),
            result: new FormControl(''),
            remark: new FormControl(''),
          })
        ])
      }));
    }
  }

  ngOnInit() {
    const response = this.getIstaOrders();

    // list attributes
    // ID, Status, contactPersonCustomer, agentCP, result, remark
    
    //fill 
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
        console.log(response);
        this.orders = response;
        return response;
      }),
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe();
  }

  filterItems() {
    if (!this.filterTerm.trim()) {
      // If search term is empty, display all items
      this.filteredItems = this.orders;
      return;
    }
  
    this.filteredItems = this.orders.filter((order) => {
      // Change this line to target the property you want to filter by
      return order.name.toLowerCase().includes(this.filterTerm.toLowerCase());
    });
  }

  sortType = 'asc';  // asc or desc

  sortOrderID() {
    if (this.sortType === 'asc') {
      this.orders.sort((a, b) => a.orderId - b.orderId);
      this.sortType = 'desc';
    } else {
      this.orders.sort((a, b) => b.orderId - a.orderId);
      this.sortType = 'asc';
    }
  }

  filterOrderID() {
    this.orders = this.orders.filter(order => order.orderId.includes(this.filterTerm));
  }

  statusTypes = [
    { title: 'Postponed', items: this.items.Postponed },
    { title: 'Cancelled', items: this.items.Cancelled },
    { title: 'Rejected', items: this.items.Rejected },
    { title: 'ClosedContractPartner', items: this.items.ClosedContractPartner },
    { title: 'NotPossible', items: this.items.NotPossible },
  ];

  activityLog = [
    {id: 1, description: 'Task 1', status: 'completed', more: 'details'},
    {id: 2, description: 'Task 2', status: 'in progress', more: 'details'},
    // more objects...
  ];
  
  getItemKeys(item: any) {
    return Object.keys(item);
  }
  
  onSubmit(form: NgForm) {
    const formValue = form.value;
    const transformedData = {
      id: formValue.id,
      remarkExternal: formValue.remarkExternal,
      actualStatus: formValue.actualStatus,
      [formValue.actualStatus]: [
        {
          orderstatusType: formValue.description,
          CustomerContacts: [
            {
              contactAttemptOn: formValue.contactAttemptOn,
              contactPersonCustomer: formValue.contactPersonCustomer,
              agentCP: formValue.agentCP,
              result: formValue.result,
              remark: formValue.remark,
            }
          ],
        },
      ],
    };

    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
    
    this.http.patch<any[]>(environment.backend + environment.url.ista.url, transformedData, { headers })
    .pipe(
      map(response => {
        this.orders = response;
        return response;
      }),
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe();
  }
  
  
  createOrderStatusFormGroup(): FormGroup {
    return this.fb.group({
      orderstatusType: [''],
      CustomerContact: this.fb.array([
        this.createCustomerContactFormGroup()
      ])
    });
  }

  createCustomerContactFormGroup(): FormGroup {
    return this.fb.group({
      contactAttemptOn: [''],
      contactPersonCustomer: [''],
      agentCP: [''],
      result: [''],
      remark: ['']
    });
  }

  onSelectChange(event: any) {
    this.selectedStatus = event.detail.value; // update your variable with the new selected value
  }
  
  segments = [
    {value: 'entries', label: 'Einträge', content: 'entry'},
    {value: 'neu', label: 'Neu', content: 'new'},
    // Add more segment options as needed
  ];
  selectedSegment = this.segments[0].value;  // default to the first segment
  selectedContent = this.segments[0].content; // default content
  // other properties, methods, etc...

  segmentChanged(event: any) {
    const selectedIndex = this.segments.findIndex(segment => segment.value === event.detail.value);
    this.selectedContent = this.segments[selectedIndex].content;
  }
  

}
