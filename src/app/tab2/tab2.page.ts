import { Component } from '@angular/core';
import { IndexedDbService } from '../services/indexed-db.service';
import { Item } from '../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/common/providers/nav-controller';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  shareItems: Item[] = [];

  constructor(public indexDbService: IndexedDbService, public navCtrl: NavController) {

    this.indexDbService.getAllWishItems().subscribe({
      next: (value) => {
        
        console.log('Wish List', value)

        this.shareItems = value;

      },error : (e) => {

        console.error(e)

      }
    });
  }

  addToBuyPage(item: Item){
    
    const options : NavigationOptions = {

      queryParams: {
        "product": item
      }

    }
    this.navCtrl.navigateForward('/buyitem', options);

  }

  removeFromCart(itemId: any) {
    this.indexDbService.removeWishListItem(itemId).subscribe({

      next: () => {

        this.shareItems = this.shareItems.filter(item => item.id !== itemId);

      },
      error: (e) => {
        console.error('Error on removing item from cart', e);
      }
    });
  }

}
