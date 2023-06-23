import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ista-order-detail',
  templateUrl: './ista-order-detail.page.html',
  styleUrls: ['./ista-order-detail.page.scss'],
})
export class IstaOrderDetailPage implements OnInit {

  orderForm: FormGroup;
  order: any[];  // change this according to your data type
  exceptionMessage = null;
  showButtons = false;
  editModes: {[key: number]: boolean} = {}; // Track the edit mode of each order by id
  editingIndex: number | null = null; // Track the index of the item being edited
  selectedOrderIdForEdit: number = null; // Add this line

                    showPlanned: boolean = false;
  showReceived: boolean = false;
  showRejected: boolean = false;


  // order = {
  //   number: '',
  //   remarkExternal: ''
  //   // add other fields as needed
  // };
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initForm();
    this.mockupOrderData();
    this.getStatusColor('Received');
  }

  initForm() {
    this.orderForm = new FormGroup({
      'number': new FormControl(null, Validators.required),
      'remarkExternal': new FormControl(null)
      // add other fields as needed
    });
  }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    // Here, you would typically send the form data to your backend to update the order
  }

  enableEditMode(index: number) {
    // Toggle the edit mode of the selected order
    this.editModes[index] = !this.editModes[index];
  }

  mockupOrderData(){
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
    this.http.get<any[]>(environment.backend + environment.url.ista.url + "/1", { headers })
    .pipe(
      map(response => {
        this.order = response;
        return response;
      }),
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe();
  }

  getStatusColor(status: string): string {
    if (status === 'Received') {
      return 'green';
    } else if (status === 'Planned') {
      return 'yellow';
    } else {
      return 'white';  // Default color
    }
  }

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  toggleEditMode(id: number) {
    // Check if this id is already being edited
    if (this.selectedOrderIdForEdit === id) {
      // If yes, then on click it will close the editing mode
      this.selectedOrderIdForEdit = null;
    } else {
      // Otherwise, it will set the selectedOrderIdForEdit to this id
      this.selectedOrderIdForEdit = id;
    }
  }
}
