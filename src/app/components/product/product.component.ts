import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/common/providers/nav-controller';
import { ApiService, Item } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  implements OnInit {
  @Input() items: any[] = [];
  constructor(public apiservice: ApiService, public navCtrl: NavController) { }

  ngOnInit() {
    this.items = this.apiservice.getItems()
  }

  goItemPage(item: Item) {

    const options : NavigationOptions = {

      queryParams : {

        id: item.id,
        name: item.name

      }

    }

    this.navCtrl.navigateForward('/tabs/items/single-ietm', options);

  }

}
