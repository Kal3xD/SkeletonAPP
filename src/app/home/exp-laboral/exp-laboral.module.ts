import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpLaboralPageRoutingModule } from './exp-laboral-routing.module';

import { ExpLaboralPage } from './exp-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpLaboralPageRoutingModule
  ],
  declarations: [ExpLaboralPage]
})
export class ExpLaboralPageModule {}
