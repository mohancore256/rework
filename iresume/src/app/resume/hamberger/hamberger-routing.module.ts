import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HambergerPage } from './hamberger.page';

const routes: Routes = [

  {
    path: '',
    component: HambergerPage
  }
  // {
  //   path: 'ir/menu',
  //   component: HambergerPage,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('../hamberger/hamberger.module').then(m => m.HambergerPageModule)
  //     },
  //     {
  //       path: 'landingPage',
  //       loadChildren: () => import('../landing-page/landing-page.module').then(m => m.LandingPagePageModule)
  //     },
  //     {
  //       path: 'myProfile',
  //       loadChildren: () => import('../personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
  //     },

  //   ]
  // },
  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HambergerPageRoutingModule {}
