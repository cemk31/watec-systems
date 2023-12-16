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
      // {
      //   path: 'trinkwasseruntersuchung',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../trinkwasseruntersuchung/trinkwasseruntersuchung.module').then(m => m.TrinkwasseruntersuchungPageModule)
      //     }
      //   ]
      // },
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
        path: 'auftrag-detail',
        children: [
          {
            path: '',
            loadChildren: () => import('../auftrag-detail/auftrag-detail.module').then(m => m.AuftragDetailPageModule)
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
        path: 'create-customer',
        children: [
          {
            path: '',
            loadChildren: () => import('../create-customer/create-customer.module').then(m => m.CreateCustomerPageModule)
          }
        ]
      },
      {
        path: 'ista',
        children: [
          {
            path: '',
            loadChildren: () => import('../ista/ista.module').then(m => m.IstaPageModule)
          }
        ]
      },
      {
        path: 'ista-order-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../ista-order-list/ista-order-list.module').then(m => m.IstaOrderListPageModule)
          }
        ]
      },
      {
        path: 'ista-order-detail/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../ista-order-detail/ista-order-detail.module').then(m => m.IstaOrderDetailPageModule)
          }
        ]
      },
      {
        path: 'test/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../test/test.module').then(m => m.TestPageModule)
          }
        ]
      },
      {
        path: 'create-ista-order',
        children: [
          {
            path: '',
            loadChildren: () => import('../create-ista-order/create-ista-order.module').then(m => m.CreateIstaOrderPageModule)
          }
        ]
      },
      {
        path: 'ista-order-table',
        children: [
          {
            path: '',
            loadChildren: () => import('../ista-order-table/ista-order-table.module').then(m => m.IstaOrderTablePageModule)
          }
        ]
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
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

