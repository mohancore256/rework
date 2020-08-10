import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatecodePage } from './gatecode.page';

const routes: Routes = [
  {
    path: '',
    component: GatecodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatecodePageRoutingModule {}
