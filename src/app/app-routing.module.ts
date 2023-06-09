import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'trinkwasseruntersuchung',
    loadChildren: () => import('./pages/trinkwasseruntersuchung/trinkwasseruntersuchung.module').then( m => m.TrinkwasseruntersuchungPageModule)
  },
  {
    path: 'untersuchung-list',
    loadChildren: () => import('./pages/untersuchung-list/untersuchung-list.module').then( m => m.UntersuchungListPageModule)
  },
  {
    path: 'personal-settings',
    loadChildren: () => import('./pages/personal-settings/personal-settings.module').then( m => m.PersonalSettingsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'auftrag',
    loadChildren: () => import('./pages/auftrag/auftrag.module').then( m => m.AuftragPageModule)
  },
  {
    path: 'auftrage',
    loadChildren: () => import('./pages/auftrage/auftrage.module').then(m => m.AuftragePageModule)
  },
  {
    path: 'auftrag-detail',
    loadChildren: () => import('./pages/auftrag-detail/auftrag-detail.module').then(m => m.AuftragDetailPageModule)
  },
  {
    path: 'create-customer',
    loadChildren: () => import('./pages/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
