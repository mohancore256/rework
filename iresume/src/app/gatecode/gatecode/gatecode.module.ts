import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatecodePageRoutingModule } from './gatecode-routing.module';

import { GatecodePage } from './gatecode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatecodePageRoutingModule
  ],
  declarations: [GatecodePage]
})
export class GatecodePageModule {}
