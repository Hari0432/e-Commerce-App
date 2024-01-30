import { Component, OnInit } from '@angular/core';
import { ApiService, Item, PRODUCTS_CAT } from '../services/api/api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NavigationOptions } from '@ionic/angular/common/providers/nav-controller';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
 

  items: any[] = [];
  searchTerm:string = '';

  constructor(private route: ActivatedRoute, public apiservice: ApiService, public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.items = this.apiservice.getItems();
  }

  isSearchBox: boolean = false;
  toggleSearch() {
    this.isSearchBox = !this.isSearchBox;
  }

  prod = this.apiservice.getItems();
  filteredItems = this.prod;

  filterItems(event:any) {
    console.log('search');
    const searchTerm = event.target.value.toLowerCase(); 
    if (searchTerm) { 
      this.filteredItems = this.prod.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase())); 
    } 
    else { 
      this.filteredItems = this.prod; 
    }
  }

  goToCategory(category: PRODUCTS_CAT) {
    
    const options : NavigationOptions = {

      

    }

    this.router.navigate(['/tabs/items/single-item',category])

  }


}
