import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  routes = [
    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Wien, Österreich',
      country: 'Österreich',
      maut: true,
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197447.png'
    },
    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Budapest, Ungarn',
      country: 'Ungarn',
      maut: true,
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197584.png'
    },
    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Zagreb, Kroatien',
      country: 'Kroatien',
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197503.png'
    },    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Maribor, Slowenien',
      country: 'Slowenien',
      maut: false,
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197633.png'
    },    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Belgrad, Serbien',
      country: 'Serbien',
      maut: true,
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197602.png'
    },
    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Sofia, Bulgarien',
      country: 'Bulgarien',
      maut: false,
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197502.png'
    },
    {
      href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
      location: 'Istanbul, Türkei',
      country: 'Türkei',
      maut: true,
      flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197518.png'
    },
  ];

  ngOnInit() {}

}
