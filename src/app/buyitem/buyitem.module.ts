import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyitemPageRoutingModule } from './buyitem-routing.module';

import { BuyitemPage } from './buyitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyitemPageRoutingModule
  ],
  declarations: [BuyitemPage]
})
export class BuyitemPageModule {}
