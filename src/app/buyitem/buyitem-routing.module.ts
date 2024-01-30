import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyitemPage } from './buyitem.page';

const routes: Routes = [
  {
    path: '',
    component: BuyitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyitemPageRoutingModule {}
