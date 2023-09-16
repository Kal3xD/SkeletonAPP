import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpLaboralPage } from './exp-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: ExpLaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpLaboralPageRoutingModule {}
