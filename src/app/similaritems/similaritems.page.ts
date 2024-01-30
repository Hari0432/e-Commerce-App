import { Component, OnInit } from '@angular/core';
import { ApiService, Item } from '../services/api/api.service';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IndexedDbService } from '../services/indexed-db.service';
import { ShareitemPage } from '../shareitem/shareitem.page';
import { NavigationOptions } from '@ionic/angular/common/providers/nav-controller';

@Component({
  selector: 'app-similaritems',
  templateUrl: './similaritems.page.html',
  styleUrls: ['./similaritems.page.scss'],
})
export class SimilaritemsPage implements OnInit {

  similarItems: Item[] = [];

  pageTitle: string = ''

  constructor(private route: ActivatedRoute,public apiservice: ApiService, public navCtrl: NavController, private toastCtrl: ToastController,
    private indexedDb: IndexedDbService, public modalCtrl: ModalController) { }

  ngOnInit() {

    this.route.queryParams.subscribe((data: any) => {

      this.similarItems = this.apiservice.getSmilarProducts(data.item.category);
      this.getmobile(data.item.id)

      this.pageTitle = 'Similar ' + data.item.category

    })

  }

  addToCart(item: Item) {

    this.indexedDb.addItemToCart(item)

    console.log('Button clicked!');
  }

  addToWishList(item: Item) {

    this.indexedDb.addItemToWishList(item)

  }

  addToBuyPage(item: Item){
    
    const options : NavigationOptions = {

      queryParams: {
        "product": item
      }

    }
    this.navCtrl.navigateForward('/buyitem', options);

  }

  async shareItem() {
    const modal = await this.modalCtrl.create({
      component: ShareitemPage,
      breakpoints:[0.15],
      initialBreakpoint:0.15
    });
    return await modal.present();
  }

  likeItem() {}


  public getmobile(id:any){

    switch(id) {
      case 11 :{
        this.similarItems=this.apiservice.getSimilarApple();
        break;
      }
      case 12: {
        this.similarItems=this.apiservice.getSimilarRedmi();
        break;
      }
      case 13: {
        this.similarItems=this.apiservice.getSimilarPixel();
        break;
      }
      case 14: {
        this.similarItems=this.apiservice.getSimilarOppo();
        break;
      }
      case 15: {
        this.similarItems=this.apiservice.getSimilarMoto();
        break;
      }
    }
        
      }

}




