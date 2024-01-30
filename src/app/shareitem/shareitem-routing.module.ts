import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareitemPage } from './shareitem.page';

const routes: Routes = [
  {
    path: '',
    component: ShareitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareitemPageRoutingModule {}
