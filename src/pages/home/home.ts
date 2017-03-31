import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OrderService } from '../../providers/order-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title : string = 'Home';
  orders : any = [];

  constructor(public navCtrl: NavController, private orderService:OrderService) {

  }

  changeTitle(title:string){
  	this.title = title;
  }

}
