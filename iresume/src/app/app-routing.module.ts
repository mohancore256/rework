import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HambergerPage } from './resume/hamberger/hamberger.page';
import { HambergerPage as  HambergerPage3} from './resume3/hamberger/hamberger.page';

const routes: Routes = [

  {
    path: 'ir/menu',
    component: HambergerPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./resume/hamberger/hamberger.module').then(m => m.HambergerPageModule)
      },
      {
        path: 'landingPage',
        loadChildren: () => import('./resume/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
      },
      {
        path: 'myProfile',
        loadChildren: () => import('./resume/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
      },

    ]
  },
  {
    path: 'ir3/menu',
    component: HambergerPage3,
    children: [
      {
        path: '',
        loadChildren: () => import('./resume3/hamberger/hamberger.module').then(m => m.HambergerPageModule)
      },
      {
        path: 'landingPage',
        loadChildren: () => import('./resume3/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
      },
      {
        path: 'myProfile',
        loadChildren: () => import('./resume3/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
      },

    ]
  },
  {
    path: 'gatecode',
    loadChildren: () => import('./gatecode/gatecode/gatecode.module').then(m => m.GatecodePageModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./gatecode/popup/popup.module').then(m => m.PopupPageModule)
  },
  {
    path: '',
    redirectTo: 'gatecode',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./resume3/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'hamberger',
    loadChildren: () => import('./resume3/hamberger/hamberger.module').then( m => m.HambergerPageModule)
  },
  {
    path: 'personalinfo',
    loadChildren: () => import('./resume3/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
