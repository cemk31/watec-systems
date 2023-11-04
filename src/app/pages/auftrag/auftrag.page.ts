import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-auftrag',
  templateUrl: './auftrag.page.html',
  styleUrls: ['./auftrag.page.scss'],
})
export class AuftragPage implements OnInit {
  showItems = false;
  exceptionMessage = null;

  auftragForm = new FormGroup({
    done: new FormControl(false),
    emailEingang: new FormControl(''),
    bemerkung: new FormControl(''),
    vorgemerkt: new FormControl(''),
    hmName: new FormControl(''),
    hmTel: new FormControl(''),
    
    objekt: new FormGroup({
      liNr: new FormControl(''),
      adresseLi: new FormControl(''),
      plzLi: new FormControl(''),
      ortLi: new FormControl(''),
    }),

    vwStatisch: new FormGroup({
      vwBuro: new FormControl(''),
      vwMa: new FormControl(''),
      mailadresseVw: new FormControl(''),
      telVw: new FormControl(''),
    }),

    vwDynamisch: new FormGroup({
      vwBuro: new FormControl(''),
      vwMa: new FormControl(''),
      mailadresseVw: new FormControl(''),
      telVw: new FormControl(''),
    }),

    email: new FormGroup({
      emailBetreff: new FormControl(''),
      emailAnhang: new FormControl(''),
      bestatigungVersendet: new FormControl(false),
      anfrageThema: new FormControl(''),
      anfrageBestatigt: new FormControl(false),
      angebotErstellt: new FormControl(false),
      angebotsnummer: new FormControl(''),
      angebot: new FormControl(''),
    }),

    auftraggeber: new FormGroup({
      auftraggeber: new FormControl(''),
      ap: new FormControl(''),
      strasse: new FormControl(''),
      plz: new FormControl(''),
      ort: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl(''),
    }),

    auftragsBestatigung: new FormGroup({
      auftragbestatigung: new FormControl(''),
      vwBestatigung: new FormControl(''),
      terminiertZum: new FormControl(''),
      uhrzeit: new FormControl(''),
      aushang: new FormControl(false),
      datumAushang: new FormControl(''),
      agInformiert: new FormControl(false),
      bgb: new FormControl(false),
      bgbBericht: new FormControl(false),
      ssa: new FormControl(false),
      bericht: new FormControl(false),
      umb: new FormControl(false),
      ber:  new FormControl(false),
      reNr: new FormControl(''),
      reBetrag: new FormControl(0),
      reErhalten: new FormControl(false),
      reNr2: new FormControl(''),
      reBetrag2: new FormControl(0),
      reNr2Erhalten: new FormControl(false),
      mahnung: new FormControl(false),
      mahnung1: new FormControl(false),
      mahnungErhalten: new FormControl(false),
      
      // muss überarbeitet werden
      dateien: new FormControl(''),
    }),
  });

  example = {
    "done": false,
    "emailEingang": "2023-05-04T23:09:14.691+02:00",
    "bemerkung": "This is a test bemerkung",
    "vorgemerkt": "",
    "liNr": "123456",
    "adresseLi": "Test Adresse",
    "plzLi": "12345",
    "ortLi": "Test Ort",
    "vwBuro": "Test Buro",
    "vwMa": "Test Ma",
    "mailadresseVw": "test@test.com",
    "telVw": "1234567890",
    "hmName": "Test HM Name",
    "hmTel": "0987654321",
    "emailBetreff": "Test Email Betreff",
    "emailAnhang": "",
    "bestatigungVersendet": false,
    "anfrageThema": "Test Anfrage Thema",
    "anfrageBestatigt": false,
    "angebotErstellt": false,
    "angebotsnummer": "",
    "angebot": "",
    "auftragbestatigung": false,
    "vwBestatigung": "",
    "terminiertZum": null,
    "uhrzeit": null,
    "aushang": false,
    "datumAushang": null,
    "agInformiert": false,
    "bgb": false,
    "bgbBericht": false,
    "ssa": false,
    "bericht": false,
    "umb": false,
    "ber": false,
    "reNr": "",
    "reBetrag": 0,
    "reErhalten": false,
    "reNr2": "",
    "reBetrag2": 0,
    "reNr2Erhalten": false,
    "dateien": "",
    "mahnung": false,
    "mahnung1": false,
    "mahnungErhaten": false,
    "auftraggeber": "",
    "ap": "",
    "strasse": "",
    "plz": "",
    "ort": "",
    "tel": "",
    "email": "test@test.com"
  }

  auftraggeberForm = this.formBuilder.group({
    auftraggeber: [''],
    ap: [''],
    strasse: [''],
    plz: [''],
    ort: [''],
    tel: [''],
    email: [''],
  });
  

  auftraege = []; // Replace this with your actual data source
  auftraggeber : any[] = [];
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService : AuthService ) {
    // this.createForm();
  }
  createForm() {
    this.auftragForm = this.formBuilder.group(this.auftragForm);
  }
  
  ngOnInit() {
    this.getAuftraggeber().subscribe(auftraggeber => {
      this.auftraggeber = auftraggeber;
    }, error => {
      console.error(error);
    });
  }
  

  onSubmit(auftragForm: NgForm) {
    console.log(auftragForm.value);
    
    // Convert uhrzeit and datumAushang to Date instances
    // const uhrzeit = new Date(this.auftragForm.controls["uhrzeit"].value);
    // const datumAushang = new Date(this.auftragForm.controls["datumAushang"].value);

    const body = {
      ...this.auftragForm.value,
      // uhrzeit: uhrzeit.toISOString(),
      // datumAushang: datumAushang.toISOString(),
    };

    const bodyTest = this.example;

        // Abrufen der Daten vom Server
        const url = `${environment.backend + environment.url.auftrag}`;
        console.log(url);
    
        const accessToken = sessionStorage.getItem("access_token");
        let headers = new HttpHeaders();
        if (accessToken) {
          headers = headers.append("Authorization", `Bearer ${accessToken}`);
        }
    this.http.post<Response>(url, body, { headers })
    .pipe(
      catchError((error) => {
        this.exceptionMessage = error.error.message;
        return throwError(error);
      })
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  createAuftrag() {

    // Add your code for creating a new auftrag
  }

  editAuftrag(auftragId: number) {
    // Add your code for editing an existing auftrag
  }

  deleteAuftrag(auftragId: number) {
    // Add your code for deleting an existing auftrag
  }

  toggleItems() {
    this.showItems = !this.showItems;
  }

  searchTerm: string = '';
  items: any[]; // this should be your actual data source
  filteredItems: any[];

  setFilteredItems() {
    if (this.searchTerm) {
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
    }
  }

  getAuftraggeber(): Observable<any[]> {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
    return this.http.get<any[]>(environment.backend + environment.url.autraggeber, { headers });
  }

  createAuftraggeber(auftraggeberForm: NgForm) {
    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', `Bearer ${accessToken}`);
    }
  }

  selectAuftraggeber() {
    
  }


}
