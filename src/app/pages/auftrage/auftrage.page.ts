import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';
import { FileSaver } from 'file-saver';

// Add this line to use the pdfFonts
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-auftrage',
  templateUrl: './auftrage.page.html',
  styleUrls: ['./auftrage.page.scss'],
})
export class AuftragePage implements OnInit {

  data: any[];
  keysToDisplay = ['id', 'createdAt', 'updatedAt', 'emailEingang', 'done', 'bemerkung', 'email', 'userId', 'reErhalten'];
  editMode = false;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.fetchData();
  }


  fetchData() {
    const domain = "http://localhost:3000/"
    const path =  + 'auftrag'
    const url = "http://localhost:3000/auftrag";

    //set token
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    console.log("access_token: ", this.authService.getAccessToken());
    if (accessToken) {
      headers = headers.append('Authorization', 'Bearer ' + accessToken);
    }
    const params = new HttpParams().set('userId', '1'); // Add the userId as a query parameter
    
    this.http.get<any[]>(url, { headers, params }).subscribe(
      (response) => {
        console.log(response);
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }

  generateTableBody() {
    const body = [];
    const headerRow = [];
  
    // Create header row
    this.keysToDisplay.forEach((key) => {
      headerRow.push({ text: key, style: 'tableHeader' });
    });
    body.push(headerRow);
  
    // Create data rows
    this.data.forEach((item) => {
      const dataRow = [];
      this.keysToDisplay.forEach((key) => {
        dataRow.push(item[key]);
      });
      body.push(dataRow);
    });
  
    return body;
  }

  exportToPDF() {
    const tableBody = this.generateTableBody();
  
    const docDefinition = {
      pageOrientation: 'landscape',
      content: [
        { text: 'Aufträge', style: 'header' },
        {
          table: {
            widths: ['10%', '10%', '10%', '15%', '10%', '15%', '10%', '10%', '10%'],
            headerRows: 1,
            body: tableBody,
          },
          layout: 'lightHorizontalLines', // optional
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black',
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }
  
  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Auftrage');
    XLSX.writeFile(wb, 'Auftrage.xlsx');
  }
  
  print() {
    const printContents = document.querySelector('ion-content').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<ion-app><ion-content>');
    printWindow.document.write(printContents);
    printWindow.document.write('</ion-content></ion-app></body></html>');
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  }
  
  search(query: string) {
    // ... implementation
  }

  select(item: any) {
    // ... implementation
  }

}
