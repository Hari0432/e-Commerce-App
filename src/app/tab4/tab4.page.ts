import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from '../services/indexed-db.service';
import { Item } from '../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/common/providers/nav-controller';
import { Charages } from '../buyitem/buyitem.page';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  cartItems: Item[] = []
  charges: Charages = {
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0
  };

  constructor(private indexDbService: IndexedDbService, public navCtrl: NavController) {

    this.indexDbService.getAllCartItems().subscribe({
      next: (value) => {
        
        console.log('Cart Items', value)

        this.cartItems = value;

      },error : (e) => {

        console.error(e)

      }
    })
   }

   ngAfterViewChecked(): void {

    let subtotal = 0;

    this.cartItems.forEach((item) => subtotal += item.price!);

    this.charges.subtotal = subtotal
    
  }

   removeFromCart(itemId: any) {
    this.indexDbService.removeCartItem(itemId).subscribe({

      next: () => {

        this.cartItems = this.cartItems.filter(item => item.id !== itemId);

      },
      error: (e) => {
        console.error('Error on removing item from cart', e);
      }
    });
  }
   
  addToBuyPage(){
    
    const options : NavigationOptions = {

      queryParams: {
        "products": this.cartItems
      }

    }
    this.navCtrl.navigateForward('/buyitem', options);

  }

  ngOnInit() {
  }

}


