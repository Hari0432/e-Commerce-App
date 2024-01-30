import { Injectable } from '@angular/core';
import { NgxIndexedDBService, ObjectStoreMeta } from 'ngx-indexed-db';
import { Item } from './api/api.service';
import { Observable, catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService { 

  constructor(private dbService: NgxIndexedDBService) { 
    
    const storeSchema: ObjectStoreMeta = {
      store: 'items',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    };
    
    const cartStoreSchema: ObjectStoreMeta = {
      store: 'cart',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    };

    const wishListSchema: ObjectStoreMeta = {
      store: 'wishList',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    };
    
    this.dbService.createObjectStore(storeSchema);
    this.dbService.createObjectStore(cartStoreSchema);
    this.dbService.createObjectStore(wishListSchema);

  }

  // initDatabase() {

  //   this.dbService.createObjectStore(2, (upgradeDB) => {

  //     if (!upgradeDB.objectStoreNames.contains('cart')) {

  //       const store = upgradeDB.createObjectStore('cart', { keyPath: 'id', autoIncrement: true });
  //     }
  //   });
  // }

  addItem(item: Item) {

    this.dbService.add('items', item).subscribe({

      next : (data) => {
        console.log(data)
      }, error: (e) => {
        console.error(e)
      }

    })

  }

  addItemToCart(item: Item) {

    this.dbService.add('cart', item).subscribe({

      next : (data) => {
        console.log(data)
      }, error: (e) => {
        console.error(e)
      }

    })
  }

  addItemToWishList(item: Item) {
    this.dbService.add('wishList', item).subscribe({

      next : (data) => {
        console.log(data)
      }, error: (e) => {
        console.log(e);
      }
    })
  }  

  getAllCartItems(): Observable<any> {

    return this.dbService.getAll('cart');

  }
  getAllWishItems(): Observable<any> {

    return this.dbService.getAll('wishList');

  }
  

  removeCartItem(item: Item): Observable<any> {

    console.log('Deleting', item.id)

    return this.dbService.delete('cart', item.id)

  }
  
  removeWishListItem(item: Item): Observable<any> {

    console.log('Deleting', item.id)

    return this.dbService.delete('wishList', item.id)

  }

  async getItem(id: number) : Promise<Observable<any>> {

    return this.dbService.getByID("items", id)

  }

}
