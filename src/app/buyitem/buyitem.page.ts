import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Item } from '../services/api/api.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

export interface Charages {
  subtotal: number,
  tax: number,
  discount: number,
  total: number
}

@Component({
  selector: 'app-buyitem',
  templateUrl: './buyitem.page.html',
  styleUrls: ['./buyitem.page.scss'],
})
export class BuyitemPage implements OnInit, AfterViewChecked {

  charges : Charages = {
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0
  }

  buyItems: Item[] = [];
  constructor(private route: ActivatedRoute, public navCtrl: NavController) { 
    this.route.queryParams.subscribe((data: any) => {
      if(data.product){
        this.buyItems.push(data.product)
      }
      if(data.products){
        data.products.forEach((element: any) => {
          this.buyItems.push(element)
        });
      }
      console.log('Received items', data.product)
      console.log(this.buyItems)
    })
    
  }

  ngAfterViewChecked(): void {

    let subtotal = 0;

    this.buyItems.forEach((item) => subtotal += item.price!);

    this.charges.subtotal = subtotal
    
  }

  address = [
    {
      id: 1,
      name: '123, South street, Rajapalayam',
      type: 'Home',
      no: 9876543210,
    },
    {
      id: 2,
      name: '124, South street, Bangalore',
      type: 'Office',
      no: 8765432190,
    },
    {
      id: 3,
      name: '133, South street, Coimbatore',
      type: 'Home',
      no: 754321809,
    },
    
  ];

  goBack() {
    this.navCtrl.back()
  }

  ngOnInit() {

  }

}
