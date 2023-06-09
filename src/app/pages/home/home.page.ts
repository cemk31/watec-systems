import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("access_token")) {
      this.router.navigateByUrl('/login');
    }
  }

  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
