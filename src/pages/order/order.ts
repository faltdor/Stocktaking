import { Component } from '@angular/core';
import { NavController, NavParams , ModalController , Events} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ItemPage } from '../item/item';
import { OrderModel } from '../../model/order-model';

import { OrderService } from '../../providers/order-service';


/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  order: OrderModel;
  orderForm : FormGroup;

  constructor(public navCtrl: NavController, 
              public modalCtrl:ModalController,
              public navParams: NavParams,
              private _event: Events,
              private fb: FormBuilder,
              private orderService:OrderService) {

      this.orderForm = fb.group({
          'orderNumber' : [null, Validators.compose([Validators.required])],
          'description' : [null, Validators.compose([Validators.required])]
      
        });

     //this.items.push({code: "0001", description: "Test 1 Description", unit: "UND", quantity: "1000", observation: "xxxxxx"})

  }

  ionViewDidLoad() {
     this._event.subscribe('item:added',(data) =>{
       this.order.addItem(data);
     })
  }

  saveNewOrder(value: any):void{
    if(!this.orderForm.valid){return;}
    let date = new Date();
    this.order = new OrderModel(value.orderNumber,value.description,date.toISOString(),[]);
    this.orderService.addOrder(this.order);
  }

  addNewItem():void{  	
  	//this.navCtrl.push(ItemPage);
    let modal = this.modalCtrl.create(ItemPage);
    modal.present();

  }

}
