import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerPipe } from './pages/customer.pipe';
import { AuthService } from './auth/auth.service';
import { IstaListComponent } from './pages/ista-list/ista-list.component';
import { IstaTablePipe } from './pages/ista-table.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    ReactiveFormsModule
  ],
  declarations: [AppComponent, CustomerPipe, IstaListComponent, IstaTablePipe],
  providers: [InAppBrowser, SplashScreen, StatusBar, AuthService],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule]
})
export class AppModule {}
