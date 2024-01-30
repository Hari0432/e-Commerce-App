import { ApiService, Item, PRODUCTS_CAT } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/common/providers/nav-controller';
import { filter } from 'rxjs';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {
  item: Item | undefined;
  similarItems: any[] = []
  constructor(private route: ActivatedRoute, public apiService: ApiService, public navCtrl: NavController) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((data: any) => {

      this.item = this.apiService.getItem(data.id);

    })

    this.similarItems = this.apiService.getSmilarProducts(this.item!.category);

  }

  goSimilarItemsPage (item: Item) {

    const options : NavigationOptions = {

      queryParams: {

        item: item

      }

    }

    this.navCtrl.navigateForward('/similaritems', options);

  }


}
