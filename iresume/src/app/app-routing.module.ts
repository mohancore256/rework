import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HambergerPage } from './resume/hamberger/hamberger.page';
import { HambergerPage as  HambergerPage3} from './resume3/hamberger/hamberger.page';

const routes: Routes = [

  {
    path: 'ir/menu',
    component: HambergerPage,
    children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'landingPage'
    // },
      {
        path: 'hamberger',
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
      {
        path: 'aboutApp',
        loadChildren: () => import('./resume/about-app/about-app.module').then( m => m.AboutAppPageModule)
      },
      {
        path: 'workExperience',
        loadChildren: () => import('./resume/work-experience/work-experience.module').then( m => m.WorkExperiencePageModule)
      },
      {
        path: 'technologies',
        loadChildren: () => import('./resume/technologies/technologies.module').then( m => m.TechnologiesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./resume/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'myClient',
        loadChildren: () => import('./resume/client/client.module').then( m => m.ClientPageModule)
      },

    ]
  },
  {
    path: 'ir/menu',
    loadChildren: () => import('./resume/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
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
      {
        path: 'aboutApp',
        loadChildren: () => import('./resume3/about-app/about-app.module').then( m => m.AboutAppPageModule)
      },
      {
        path: 'myClient',
        loadChildren: () => import('./resume3/client/client.module').then( m => m.ClientPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./resume3/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'technologies',
        loadChildren: () => import('./resume3/technologies/technologies.module').then( m => m.TechnologiesPageModule)
      },
      {
        path: 'workExperience',
        loadChildren: () => import('./resume3/work-experience/work-experience.module').then( m => m.WorkExperiencePageModule)
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
 
  
  // {
  //   path: 'about-app',
  //   loadChildren: () => import('./resume/about-app/about-app.module').then( m => m.AboutAppPageModule)
  // },
  // {
  //   path: 'about-app',
  //   loadChildren: () => import('./resume3/about-app/about-app.module').then( m => m.AboutAppPageModule)
  // },
  // {
  //   path: 'landing-page',
  //   loadChildren: () => import('./resume3/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  // },
  // {
  //   path: 'hamberger',
  //   loadChildren: () => import('./resume3/hamberger/hamberger.module').then( m => m.HambergerPageModule)
  // },
  // {
  //   path: 'personalinfo',
  //   loadChildren: () => import('./resume3/personalinfo/personalinfo.module').then( m => m.PersonalinfoPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
