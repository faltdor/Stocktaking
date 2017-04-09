import { Component } from '@angular/core';
import { NavController ,Platform , ModalController} from 'ionic-angular';
import { Subscription }   from 'rxjs/Subscription';

import {OrderPage} from '../order/order';

import { OrderService } from '../../providers/order-service';
import { StorageService } from '../../providers/storage-service';

import { OrderModel } from '../../model/order-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title : string = 'Home';
  orders: OrderModel[] = [];

  subscription: Subscription;

  constructor(public navCtrl: NavController, 
              private modalCtrl:ModalController,
      			  private orderService:OrderService,
              private storageService:StorageService,
  			      public platform: Platform) {

    this.subscription = this.orderService.orderAnnounced$.subscribe(orders =>{
          this.orders = orders;        
      });

  }

  ionViewDidLoad(){
  	this.platform.ready().then(()=>{

  		this.storageService.loadOrders().then(orderList =>{
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
        this.orderService.setOrders(this.orders);
        
			}		


  		});
  	});
  }

  addOrder():void{
  	//this.navCtrl.push(OrderPage)
    let modal = this.modalCtrl.create(OrderPage);
    modal.present();
  }


  onOrderSelected(order:OrderModel):void{
    let modal = this.modalCtrl.create(OrderPage,{order:order});
    modal.present();
  }

  changeTitle(title){
    this.title = title;
  }

  removeOrder(order:OrderModel):void{
    this.orderService.deleteOrder(order);
  }


}
