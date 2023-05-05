import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-auftrag',
  templateUrl: './auftrag.page.html',
  styleUrls: ['./auftrag.page.scss'],
})
export class AuftragPage implements OnInit {


  auftragForm = new FormGroup({
    done: new FormControl(false),
    emailEingang: new FormControl(''),
    bemerkung: new FormControl(''),
    vorgemerkt: new FormControl(''),
    liNr: new FormControl(''),
    adresseLi: new FormControl(''),
    plzLi: new FormControl(''),
    ortLi: new FormControl(''),
    vwBuro: new FormControl(''),
    vwMa: new FormControl(''),
    mailadresseVw: new FormControl(''),
    telVw: new FormControl(''),
    hmName: new FormControl(''),
    hmTel: new FormControl(''),
    emailBetreff: new FormControl(''),
    emailAnhang: new FormControl(''),
    bestatigungVersendet: new FormControl(false),
    anfrageThema: new FormControl(''),
    anfrageBestatigt: new FormControl(false),
    angebotErstellt: new FormControl(false),
    angebotsnummer: new FormControl(''),
    angebot: new FormControl(''),
    auftragbestatigung: new FormControl(false),
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
    ber: new FormControl(false),
    reNr: new FormControl(''),
    reBetrag: new FormControl(0),
    reErhalten: new FormControl(false),
    reNr2: new FormControl(''),
    reBetrag2: new FormControl(''),
    reNr2Erhalten: new FormControl(''),
    dateien: new FormControl(''),
    mahnung: new FormControl(false),
    mahnung1: new FormControl(false),
    mahnungErhaten: new FormControl(false),
    auftraggeber: new FormControl(''),
    ap: new FormControl(''),
    strasse: new FormControl(''),
    plz: new FormControl(''),
    ort: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl('', Validators.required),
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

  auftraege = []; // Replace this with your actual data source

  constructor(private formBuilder: FormBuilder, private http: HttpClient ) {
    this.createForm();
  }
  createForm() {
    this.auftragForm = this.formBuilder.group(this.auftragForm);
  }
  
  ngOnInit() {}

  onSubmit(auftragForm: NgForm) {

    console.log(auftragForm.value);
    const body = auftragForm.value;
    const bodyTest = this.example;

    const domain = "http://localhost:3000/"
    const path =  + 'auftrag'
    const url = "http://localhost:3000/auftrag";

    //set token
    const accessToken = sessionStorage.getItem("access_token");
    const authorization = accessToken ? "Bearer " + accessToken : null;
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append('Authorization', "Bearer " + accessToken);
    }
    this.http.post<Response>(url, this.example, { headers })
    .subscribe(response => {
      console.log(response);
    });

    // if (auftragForm.valid) {
    //   console.log(auftragForm.value);
    //   const body = auftragForm.value;
    //   const bodyTest = this.example;

    //   const domain = "http://localhost:3000/"
    //   const path =  + 'auftrag'
    //   const url = "http://localhost:3000/auftrag";

    //   //set token
    //   const accessToken = sessionStorage.getItem("access_token");
    //   const authorization = accessToken ? "Bearer " + accessToken : null;
    //   let headers = new HttpHeaders();
    //   if (accessToken) {
    //     headers = headers.append('Authorization', "Bearer " + accessToken);
    //   }
    //   this.http.post<Response>(url, this.example, { headers })
    //   .subscribe(response => {
    //     console.log(response);
    //   });
    //   // Hier können Sie Ihre Formulardaten verarbeiten und an einen Server senden oder eine andere Aktion ausführen
    // } else {
    //   console.log('Formular ist ungültig');
    // }
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
}
