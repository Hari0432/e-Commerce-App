import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimilaritemsPageRoutingModule } from './similaritems-routing.module';

import { SimilaritemsPage } from './similaritems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimilaritemsPageRoutingModule
  ],
  declarations: [SimilaritemsPage]
})
export class SimilaritemsPageModule {}
