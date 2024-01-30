import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPage } from './items.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage
  },
  {
    path: ':id',
    loadChildren: () => import('../single-item/single-item.module').then( m => m.SingleItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule {}
