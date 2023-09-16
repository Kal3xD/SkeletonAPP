import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisDatosPageRoutingModule } from './mis-datos-routing.module';
import { MisDatosPage } from './mis-datos.page';

import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisDatosPageRoutingModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule,  MatNativeDateModule, 
  ],
  declarations: [MisDatosPage]
})
export class MisDatosPageModule {}
