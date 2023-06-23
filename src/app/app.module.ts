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
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
  ],
  declarations: [AppComponent, CustomerPipe],
  providers: [InAppBrowser, SplashScreen, StatusBar, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
