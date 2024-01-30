import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
// import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterContentChecked {
  @ViewChildren('swiper') swiperRef!: QueryList<SwiperComponent>;
  // swiper?: Swiper;

  option = {
    loop: true,
    zoom: true,
    autoplay: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

  }

  gadgetsImages = [
    'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png',
    'https://pngfre.com/wp-content/uploads/laptop-png-from-pngfre-22.png',
    'https://freepngimg.com/thumb/photo_camera/8-2-photo-camera-png-clipart.png',
    'https://storage.aoc.com/assets/8829/AOC_G2_C27G2_C27G2Z_CQ27G2_C32G2_CQ32G2S_FV_ADJUSTABLE_STAND_FRONT-medium.png',
    'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/329/146788/0a3738e4c0de2ec1c1723fa2eb1a12952e880103e26a495f44042a84d23e78d7__73798.1701573690.png?c=2',
    'https://www.boat-lifestyle.com/cdn/shop/products/74a6b20d-9842-49da-b279-022812b81e1f_e5e0bcf1-9409-42f9-9844-304ce76d327e_288x.png?v=1665560415',
  ];

  applianceImages = [
    'https://vaya.in/wp-content/uploads/2021/05/10-Must-Have-Appliances-for-Easy-Kitchen-Chores.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2022/9/TT/VY/SE/7285785/l-shape-modular-kitchen-500x500.jpg',
    'https://image.made-in-china.com/2f0j00fGjbFmuICDoz/Wholesale-Modern-Style-Luxury-Home-Bathroom-Accessories-Set-Good-Quality.webp',
  ]

  constructor(public navCtrl: NavController) { }

  ngAfterContentChecked(): void {

    if (this.swiperRef && this.swiperRef.length > 0) {
      this.swiperRef.toArray().forEach((swiper) => {
        swiper.updateSwiper({});
        swiper.swiperRef.autoplay.start()
      })
    }

  }

  swiperReady(id?: any) {
    // this.swiper = this.swiperRef?.nativeElement.Swiper;
    // console.log('Swiper ready', id)
  }

  swiperSlideChange(e: any) {
    // console.log('Changed : ', e)
  }

  ngOnInit() {
  }

  redirect() {
    this.navCtrl.navigateForward('/tabs/items')
  }

  slideChange() {

  }
}
