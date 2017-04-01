import { Component } from '@angular/core';
import { NavController ,Platform} from 'ionic-angular';

import {OrderPage} from '../order/order';

import { OrderService } from '../../providers/order-service';	
import { OrderModel } from '../../model/order-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title : string = 'Home';
  orders: OrderModel[] = [];

  constructor(public navCtrl: NavController, 
  			  private orderService:OrderService,
  			  public platform: Platform) {

  }

  ionViewDidLoad(){
  	this.platform.ready().then(()=>{
  		this.orderService.getOrders().then(orderList =>{
  			let savedOrderlists: any = false;	
  			
  			if(typeof(orderList) != "undefined"){
				savedOrderlists = JSON.parse(orderList);
			}


			if(savedOrderlists){	
				savedOrderlists.forEach((savedOrderlist) => {
					let loadOrderlist = new OrderModel(savedOrderlist.orderNumber,
													   savedOrderlist.description,
													   savedOrderlist.orderDate,
													   savedOrderlist.items);

					this.orders.push(loadOrderlist);
					
					loadOrderlist.orderListUpdates().subscribe(update => {
						//this.save();
					});
				});
			}		


  		});
  	});
  }

  addOrder():void{
  	this.navCtrl.push(OrderPage)
  }


  changeTitle(title:string){
  	this.title = title;
  }

}
