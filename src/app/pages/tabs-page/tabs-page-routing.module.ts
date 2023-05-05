import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'trinkwasseruntersuchung',
        children: [
          {
            path: '',
            loadChildren: () => import('../trinkwasseruntersuchung/trinkwasseruntersuchung.module').then(m => m.TrinkwasseruntersuchungPageModule)
          }
        ]
      },
      {
        path: 'untersuchung-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../untersuchung-list/untersuchung-list.module').then(m => m.UntersuchungListPageModule)
          }
        ]
      },
      {
        path: 'personal-settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../personal-settings/personal-settings.module').then(m => m.PersonalSettingsPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'auftrag',
        children: [
          {
            path: '',
            loadChildren: () => import('../auftrag/auftrag.module').then(m => m.AuftragPageModule)
          }
        ]
      },

      {
        path: 'auftrage',
        children: [
          {
            path: '',
            loadChildren: () => import('../auftrage/auftrage.module').then(m => m.AuftragePageModule)
          }
        ]
      },
      {
        path: 'customer',
        children: [
          {
            path: '',
            loadChildren: () => import('../customer/customer.module').then(m => m.CustomerPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

