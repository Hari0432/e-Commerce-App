import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimilaritemsPage } from './similaritems.page';

const routes: Routes = [
  {
    path: '',
    component: SimilaritemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimilaritemsPageRoutingModule {}
