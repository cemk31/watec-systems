import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-untersuchung-list',
  templateUrl: './untersuchung-list.page.html',
  styleUrls: ['./untersuchung-list.page.scss'],
})
export class UntersuchungListPage implements OnInit {

  constructor(private http: HttpClient) { }

  response: any;

  ngOnInit() {
    console.log("hello");
    // this.http.get('https://spootech.bubbleapps.io/version-test/api/1.1/obj/Adresse_SST/').subscribe(data => {
    //   this.response = data.results;
    //   console.log(this.response);
    // });
  }

}
