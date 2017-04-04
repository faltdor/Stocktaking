import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ItemPage } from '../item/item';
import { OrderModel } from '../../model/order-model';


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
              public navParams: NavParams,
              private fb: FormBuilder,) {

      this.orderForm = fb.group({
          'orderNumber' : [null, Validators.compose([Validators.required])],
          'description' : [null, Validators.compose([Validators.required])]
      
        });

  }

  ionViewDidLoad() {
   
  }

  saveNewOrder(value: any):void{
    if(!this.orderForm.valid){return;}
    let date = new Date();
    this.order = new OrderModel(value.orderNumber,value.description,date.toISOString(),[]);
    
  }

  addNewItem():void{  	
  	this.navCtrl.push(ItemPage);
  }

}
