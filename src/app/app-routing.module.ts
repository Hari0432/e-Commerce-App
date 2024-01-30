import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'similaritems',
    loadChildren: () => import('./similaritems/similaritems.module').then( m => m.SimilaritemsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'shareitem',
    loadChildren: () => import('./shareitem/shareitem.module').then( m => m.ShareitemPageModule)
  },
  {
    path: 'buyitem',
    loadChildren: () => import('./buyitem/buyitem.module').then( m => m.BuyitemPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
