import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HambergerPage } from './hamberger.page';

const routes: Routes = [
  {
    path: '',
    component: HambergerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HambergerPageRoutingModule {}
