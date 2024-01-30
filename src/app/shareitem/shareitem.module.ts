import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareitemPageRoutingModule } from './shareitem-routing.module';

import { ShareitemPage } from './shareitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareitemPageRoutingModule
  ],
  declarations: [ShareitemPage]
})
export class ShareitemPageModule {}
