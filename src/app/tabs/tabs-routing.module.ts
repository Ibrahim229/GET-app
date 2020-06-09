import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/tabs/home",
    pathMatch: "full"
  },
  {
    path: "tabs",
    component: TabsPage
    ,
    children: [
      {
        path: "home",
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: "images",
        loadChildren: () => import('../images/images.module').then(m => m.ImagesPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
