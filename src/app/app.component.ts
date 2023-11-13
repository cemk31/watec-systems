import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage-angular';

import { UserData } from './providers/user-data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  light = false; // Die Eigenschaft muss definiert sein
  isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
  appPages = [
    {
      title: 'Home',
      url: '/app/tabs/home',
      icon: 'home'
    },
    // {
    //   title: 'Informationen',
    //   url: '/app/tabs/about',
    //   icon: 'information-circle'
    // },
    {
      title: 'Trinkwasseruntersuchung anlegen (BETA)',
      url: '/app/tabs/trinkwasseruntersuchung',
      icon: 'water'
    },
    // {
    //   title: 'Untersuchungen',
    //   url: '/app/tabs/untersuchung-list',
    //   icon: 'map'
    // },
    {
      title: 'Kunden',
      url: '/app/tabs/customer',
      icon: 'person'
    },
    {
      title: 'Kunde anlegen',
      url: '/app/tabs/create-customer',
      icon: 'person'
    },
    {
      title: 'WATEC Auftrag anlegen (MASTER)',
      url: '/app/tabs/auftrag',
      icon: 'person'
    },
    {
      title: 'WATEC Aufträge (MASTERDATENBANK)',
      url: '/app/tabs/auftrage',
      icon: 'person'
    },
    {
      title: 'Test Liste',
      url: '/app/tabs/list',
      icon: 'person'
    }
    ,
    {
      title: 'Bestelldetail (ISTA)',
      url: '/test',
      icon: 'document'
    },
  ];

  istaPages = [
    // {
    //   title: 'ISTA Bestellungen (Liste)',
    //   url: '/app/tabs/ista',
    //   icon: 'document'
    // }
    // ,
    {
      title: 'Kundenkontakt erstellen',
      url: '/app/tabs/create-ista-order',
      icon: 'water'
    },
    {
      title: 'ISTA Bestellungen (Tabelle)',
      url: '/app/tabs/ista-order-table',
      icon: 'water'
    }
    ,
    {
      title: 'ISTA INFO AUFTRAG',
      url: 'app/tabs/ista-order-detail/:id',
      icon: 'water'
    },
    // {
    //   title: 'Auftrag Erstellen (Testkomponente)',
    //   url: '/app/tabs/auftrag-detail',
    //   icon: 'person'
    // },
  ];

  personalPages = [
    {
      title: 'Einstellungen',
      url: '/app/tabs/personal-settings',
      icon: 'settings'
    },
  ];
  otherPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'Registrieren',
      url: '/signup',
      icon: 'person'
    },
  ];
  dark = true;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    if (!sessionStorage.getItem("access_token")) {
      this.router.navigateByUrl("login");
    }
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
    await this.storage.create();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      // this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    // sessionStorage.clear();
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("loggedIn");
    sessionStorage.setItem("loggedOut", "true");
    localStorage.removeItem('isUserLoggedIn'); 
    this.router.navigateByUrl('/login').then(() => window.location.reload());;
  }

  // openTutorial() {
  //   // this.menu.enable(false);
  //   // this.storage.set('ion_did_tutorial', false);
  //   this.router.navigateByUrl('/tutorial');
  // }

  onToggleDarkMode() {
    console.log("onToggleDarkMode");
    // this.dark = !this.dark;
    // document.body.classList.toggle('dark', this.dark);
  }

}
