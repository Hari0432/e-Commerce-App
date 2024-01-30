import { Injectable } from '@angular/core';

export enum PRODUCTS_CAT {
  PHONE = 'phone',
  MONITOR = 'monitor',
  LAPTOP = 'laptop',
  CAMERA = 'camera',
  SPEAKER = 'speaker',
  HEADPHONE = 'headphone',
  EARBUDS = 'earbuds',
  SMART_WATCH = 'smart_watch',
  SMART_TV = 'smart_tv',
  PENDRIVE = 'pendrive',
}

export interface Item {

  id: number,
  name: string,
  description?: string;
  price?: number,
  Image: string,
  off?: number,
  category: PRODUCTS_CAT

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: Item[] = [];
  products: any[] = [];
  appleProduct: any[] = [];
  redmiProduct: any[] = [];
  pixelProduct:any [] = [];
  oppoProduct:any [] = [];
  motoProduct:any [] = [];

  constructor() { }

  getItems(): Item[] {
    this.items = [
      { id: 1, name: 'Phone', Image: 'https://westgate.ng/wp-content/uploads/2023/02/Apple-iPhone-14-Plus-Westgate-Technologies-Ltd.jpg', category: PRODUCTS_CAT.PHONE, price: 799.99 },
      { id: 2, name: 'Monitor', Image: 'https://m.media-amazon.com/images/I/51vLUhcBVXL.jpg', category: PRODUCTS_CAT.MONITOR, price: 299.99 },
      { id: 3, name: 'Laptop', Image: 'https://www.electronicsbazaar.com/media/wysiwyg/home/laptop.jpg', category: PRODUCTS_CAT.LAPTOP, price: 1299.99 },
      { id: 4, name: 'Camera', Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg', category: PRODUCTS_CAT.CAMERA, price: 499.99 },
      { id: 5, name: 'Speaker', Image: 'https://images.philips.com/is/image/PhilipsConsumer/SPA65_94-IMS-en_IN?$jpglarge$&wid=1250', category: PRODUCTS_CAT.SPEAKER, price: 99.99 },
      { id: 6, name: 'Headphone', Image: 'https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/Q/N/189377_1622672852.jpg', category: PRODUCTS_CAT.HEADPHONE, price: 49.99 },
      { id: 7, name: 'EarBuds', Image: 'https://media.cnn.com/api/v1/images/stellar/prod/earfun-free-pro-3-product-card-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill', category: PRODUCTS_CAT.EARBUDS, price: 29.99 },
      { id: 8, name: 'Smart Watch', Image: 'https://media.istockphoto.com/id/1847472699/photo/electronic-watch-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=plhEALMC4aVOVgE7OHLkAa_-3asmXKllhfxZl1uZ-T8=', category: PRODUCTS_CAT.SMART_WATCH, price: 199.99 },
      { id: 9, name: 'Smart Tv', Image: 'https://www.mylloyd.com/media/products/zoom1-min.jpg', category: PRODUCTS_CAT.SMART_TV, price: 799.99 },
      { id: 10,name: 'Pendrive', Image: 'https://rukminim2.flixcart.com/image/850/1000/jyoq93k0/pendrive/pendrive/p/a/g/wefuse-pendrives-usb2-0-flash-drive-stick-with-cap-32gb-original-imafgv9juakxzjhc.jpeg?q=90', category: PRODUCTS_CAT.PENDRIVE, price: 19.99 },
    ];
    return this.items;
  }

  getItem(id: any): Item | undefined {
    console.log('Finding item', id, this.items.find(x => x.id === id))
    return this.items.find(x => x.id === id)
  }

  getPhone() {
    this.products = [
      { id: 11, name: 'Apple', description: 'Lorem Ipsum', Image: 'https://westgate.ng/wp-content/uploads/2023/02/Apple-iPhone-14-Plus-Westgate-Technologies-Ltd.jpg', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 299.99 },
      { id: 12, name: 'Redmi', description: 'Lorem Ipsum', Image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-14570,resizemode-75,msid-105966560/top-trending-products/mobile-phones/redmi-12-5g-explore-key-specifications-pros-and-cons-of-this-budget-friendly-smartphone.jpg', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 799.99 },
      { id: 13, name: 'Google Pixel', description: 'Lorem Ipsum', Image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-160143/Google-Pixel-8-featured-image-packshot-review-Recovered.jpg', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 699.99 },
      { id: 14, name: 'Oppo', description: 'Lorem Ipsum', Image: 'https://darlingretail.com/cdn/shop/products/2_9001dfdd-9756-4426-9f0c-081fec41c48f_800x.jpg?v=1666096768', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 549.99 },
      { id: 15, name: 'MotoRola', description: 'Lorem Ipsum', Image: 'https://www.reliancedigital.in/medias/Motorola-EDGE-30-Mobile-Phone-492912754-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NjQ4NnxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDcyLzk4MzE2ODY4NjQ5MjYuanBnfDdhYmUyZDEzYjRiOWY0MTI3OWJhYzllZTU4YzZiOTU2ZjlkYzk1M2E5ZDNiOTVkZWJlMDkzY2MxZDhlNWYyYzc', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 349.99 }
    ];
    return this.products;
  }

  getSimilarRedmi() {
    this.redmiProduct = [
      { id: 16, name: 'Redmi Note 10', description: 'Lorem Ipsum', Image: 'https://img.giznext.com/assets/model/4/1890/xiaomi-redmi-note-10-546bcac8123f8e7144041a6d32f81a.jpg', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 199.99 },
      { id: 17, name: 'Redmi Note 11', description: 'Lorem Ipsum', Image: 'https://akn-ayb.a-cdn.akinoncdn.com/products/2023/01/23/2176832/e4ef2d3e-d96e-46cb-89ea-2b932d8b30d2_size780x780_quality60_cropCenter.jpg', off: '30% Off', category: PRODUCTS_CAT.PHONE, price: 249.99 },
      { id: 18, name: 'Redmi Note 11 Pro', description: 'Lorem Ipsum', Image: 'https://locosphone.com/wp-content/uploads/2022/02/thumb_576281_default_big.jpg', off: '60% Off', category: PRODUCTS_CAT.PHONE, price: 349.99 },
      { id: 19, name: 'Redmi Note 12', description: 'Lorem Ipsum', Image: 'https://media-cdn.bnn.in.th/292653/Xiaomi-Redmi-Note-12Pro-4-square_medium.jpg', off: '75% Off', category: PRODUCTS_CAT.PHONE, price: 499.99 },
      { id: 20, name: 'Redmi Note 12 Pro', description: 'Lorem Ipsum', Image: 'https://mi-shop.com/upload/iblock/77b/otq0osnhxpgu7do8ur2uh2hexwkhe5i2.jpg', off: '20% Off', category: PRODUCTS_CAT.PHONE, price: 599.99 }
 ];
    return this.redmiProduct;

  }

  getSimilarApple() {
    this.appleProduct = [
      { id: 21, name: 'Iphone SE', description: 'Offer 19%', Image: 'https://mobilegoo.shop/cdn/shop/products/black1_f58964f4-dbd0-44f9-9ef4-28dde4a9fe22.jpg?v=1673869384', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 499.99 },
      { id: 22, name: 'Iphone 11', description: 'Lorem Ipsum', Image: 'https://www.reliancedigital.in/medias/iPhone-11-64GB-Purple-491901642-i-5-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDYyOHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaGI3Lzk0MjE5MTUzODk5ODIuanBnfDE1MGIxODhjMWQyY2E1MDQ1ZTNmMmFkOGExMzMwM2UzYTU3ZDA3NDZkMjJjMDYxMDQ3ZTBlOWYwODEzNjY0ZGY', off: '30% Off', category: PRODUCTS_CAT.PHONE, price: 799.99 },
      { id: 23, name: 'Iphone 12', description: 'Lorem Ipsum', Image: 'https://cellbuddy.in/buddy/wp-content/uploads/2022/09/12-Red.png', off: '60% Off', category: PRODUCTS_CAT.PHONE, price: 1099.99 },
      { id: 24, name: 'Iphone 13', description: 'Lorem Ipsum', Image: 'https://www.jiomart.com/images/product/original/491997700/apple-iphone-13-128-gb-starlight-digital-o491997700-p590798551-0-202208221207.jpeg?im=Resize=(420,420)', off: '75% Off', category: PRODUCTS_CAT.PHONE, price: 1299.99 },
      { id: 25, name: 'Iphone 14', description: 'Lorem Ipsum', Image: 'https://shop.iplanetstore.in/cdn/shop/files/iPhone_14_Pro_Space_Black_PDP_Image_Position-1a__WWEN.jpg?v=1691141356', off: '20% Off', category: PRODUCTS_CAT.PHONE, price: 1499.99 }
    ];
    return this.appleProduct;

  }

 

  getSimilarPixel() {
    this.pixelProduct = [
      { id: 26, name: 'Pixel 6A', description: 'Lorem Ipsum', Image: 'https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-px6a/sage/landscape-front.png', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 299.99 },
      { id: 27, name: 'Pixel 6 Pro', description: 'Lorem Ipsum', Image: 'https://images-cdn.ubuy.co.in/657b6368270ca11fc04edf6e-google-pixel-6-pro-5g-android-phone.jpg', off: '30% Off', category: PRODUCTS_CAT.PHONE, price: 699.99 },
      { id: 28, name: 'Pixel 7', description: 'Lorem Ipsum', Image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=90&crop=false', off: '60% Off', category: PRODUCTS_CAT.PHONE, price: 799.99 },
      { id: 29, name: 'Pixel 8', description: 'Lorem Ipsum', Image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-157488/Google-Pixel-8-Pro-featured-image-packshot-review.jpg', off: '75% Off', category: PRODUCTS_CAT.PHONE, price: 899.99 },
      { id: 30, name: 'Pixel 8 Pro', description: 'Lorem Ipsum', Image: 'https://i0.wp.com/www.cloudorian.com/wp-content/uploads/2023/10/Google-Pixel-8-Pro-0.jpg?fit=1500%2C1500&ssl=1', off: '20% Off', category: PRODUCTS_CAT.PHONE, price: 999.99 }
    ];
    return this.pixelProduct;

  }

  getSimilarOppo() {
    this.oppoProduct = [
      { id: 31, name: 'Reno 8 Pro', description: 'Lorem Ipsum', Image: 'https://m.media-amazon.com/images/I/51gpYkwfWhL.jpg', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 549.99 },
      { id: 32, name: 'F19 Pro', description: 'Lorem Ipsum', Image: 'https://mi-shop.com/upload/iblock/77b/otq0osnhxpgu7do8ur2uh2hexwkhe5i2.jpg', off: '30% Off', category: PRODUCTS_CAT.PHONE, price: 399.99 },
      { id: 33, name: 'F21 Pro', description: 'Lorem Ipsum', Image: 'https://locosphone.com/wp-content/uploads/2022/02/thumb_576281_default_big.jpg', off: '60% Off', category: PRODUCTS_CAT.PHONE, price: 499.99 },
      { id: 34, name: 'Reno 6 Pro', description: 'Lorem Ipsum', Image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-98860/Oppo-Reno6-Pro-5G-featured-image-packshot-review-Recovered-Recovered-Recovered.jpg', off: '75% Off', category: PRODUCTS_CAT.PHONE, price: 599.99 },
      { id: 35, name: 'F17 Pro', description: 'Lorem Ipsum', Image: 'https://mi-shop.com/upload/iblock/77b/otq0osnhxpgu7do8ur2uh2hexwkhe5i2.jpg', off: '20% Off', category: PRODUCTS_CAT.PHONE, price: 449.99 }
    ];
    return this.oppoProduct;

  }

  getSimilarMoto() {
    this.motoProduct = [
      { id: 36, name: 'MotoRola 10', description: 'Lorem Ipsum', Image: 'https://img.giznext.com/assets/model/4/1890/xiaomi-redmi-note-10-546bcac8123f8e7144041a6d32f81a.jpg', off: '40% Off', category: PRODUCTS_CAT.PHONE, price: 299.99 },
      { id: 37, name: 'MotoRola 11', description: 'Lorem Ipsum', Image: 'https://akn-ayb.a-cdn.akinoncdn.com/products/2023/01/23/2176832/e4ef2d3e-d96e-46cb-89ea-2b932d8b30d2_size780x780_quality60_cropCenter.jpg', off: '30% Off', category: PRODUCTS_CAT.PHONE, price: 349.99 },
      { id: 38, name: 'MotoRola 11 Pro', description: 'Lorem Ipsum', Image: 'https://locosphone.com/wp-content/uploads/2022/02/thumb_576281_default_big.jpg', off: '60% Off', category: PRODUCTS_CAT.PHONE, price: 449.99 },
      { id: 39, name: 'MotoRola 12', description: 'Lorem Ipsum', Image: 'https://media-cdn.bnn.in.th/292653/Xiaomi-Redmi-Note-12Pro-4-square_medium.jpg', off: '75% Off', category: PRODUCTS_CAT.PHONE, price: 499.99 },
      { id: 40, name: 'MotoRola 12 Pro', description: 'Lorem Ipsum', Image: 'https://mi-shop.com/upload/iblock/77b/otq0osnhxpgu7do8ur2uh2hexwkhe5i2.jpg', off: '20% Off', category: PRODUCTS_CAT.PHONE, price: 599.99 }
    ];
    return this.motoProduct;

  }

  getSimilarMonitor() {
    return [
      { id: 41, name: 'Dell Monitor', Image: 'https://www.dell.com/learn/us/en/uscorp1/images/Dell-Alienware-55-QD-OLED-Gaming-Monitor-AW5520QD-10-A01-Gallery-504x350.jpg', category: PRODUCTS_CAT.MONITOR, price: 699.99 },
      { id: 42, name: 'HP Monitor', Image: 'https://i.ebayimg.com/images/g/3CwAAOSwi0NfJRZD/s-l1600.jpg', category: PRODUCTS_CAT.MONITOR, price: 499.99 },
      { id: 43, name: 'LG Monitor', Image: 'https://www.lg.com/us/images/monitors/md07004502/gallery/desktop_01.jpg', category: PRODUCTS_CAT.MONITOR, price: 599.99 },
    ];
  }

  getSimilarLaptop() {
    return [
      { id: 44, name: 'HP Laptop', Image: 'https://i.ebayimg.com/images/g/3CwAAOSwi0NfJRZD/s-l1600.jpg', category: PRODUCTS_CAT.LAPTOP, price: 799.99 },
      { id: 45, name: 'Dell Laptop', Image: 'https://www.dell.com/learn/us/en/uscorp1/images/Dell-Alienware-55-QD-OLED-Gaming-Monitor-AW5520QD-10-A01-Gallery-504x350.jpg', category: PRODUCTS_CAT.LAPTOP, price: 1299.99 },
      { id: 46, name: 'Lenovo Laptop', Image: 'https://static.lenovo.com/ww/subseries/hero-1.png', category: PRODUCTS_CAT.LAPTOP, price: 899.99 },
    ];
  }

  getSimilarCamera() {
    return [
      // Add camera items here
    ];
  }

  getSimilarSpeaker() {
    return [
      // Add speaker items here
    ];
  }

  getSimilarHeadphone() {
    return [
      // Add headphone items here
    ];
  }

  getSimilarEarbuds() {
    return [
      // Add earbuds items here
    ];
  }

  getSimilarSmartWatch() {
    return [
      // Add smart watch items here
    ];
  }

  getSimilarSmartTV() {
    return [
      // Add smart TV items here
    ];
  }

  getSimilarPendrive() {
    return [
      // Add pendrive items here
    ];
  }


  getSmilarProducts(productCat: PRODUCTS_CAT): any[] {
    console.log('getSimilarProducts', productCat);

    switch (productCat) {
      case PRODUCTS_CAT.PHONE: {
          // const appleItems = this.items.filter(item => this.getPhone.name.toLowerCase().includes('apple' || 'redmi'|| 'Google Pixel' || 'Oppo' || 'MotoRola'));
          // return appleItems.length > 0 ? this.getSimilarApple() : this.getPhone();
          return this.getPhone();
        }
      case PRODUCTS_CAT.MONITOR: {
        return this.getSimilarMonitor();
      }
      case PRODUCTS_CAT.LAPTOP: {
        return this.getSimilarLaptop();
      }
      case PRODUCTS_CAT.CAMERA: {
        return this.getSimilarCamera();
      }
      case PRODUCTS_CAT.SPEAKER: {
        return this.getSimilarSpeaker();
      }
      case PRODUCTS_CAT.HEADPHONE: {
        return this.getSimilarHeadphone();
      }
      case PRODUCTS_CAT.EARBUDS: {
        return this.getSimilarEarbuds();
      }
      case PRODUCTS_CAT.SMART_WATCH: {
        return this.getSimilarSmartWatch();
      }
      case PRODUCTS_CAT.SMART_TV: {
        return this.getSimilarSmartTV();
      }
      case PRODUCTS_CAT.PENDRIVE: {
        return this.getSimilarPendrive();
      }
      default: {
        return [];
      }
    }
  }
  
  

}
