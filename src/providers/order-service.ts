import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the OrderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class OrderService {

  orders: any[] = [];

  constructor(public storage: Storage) {
    let order = [{
         orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', 
         description: 'Test 1 Description', 
         orderNumber: '39.99', 
         items:  [
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 1 Description', orderNumber: '39.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 2 Description', orderNumber: '29.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 3 Description', orderNumber: '19.99'}
          ]
        }]

     this.save(order);

  }

  public getOrders():Promise<any>{    
  	return this.storage.get('orderlists');
  }

  save(data): void {
  	let saveData = [];
  	//Remove observables
  	data.forEach((orderlists) => {
  		saveData.push({
         orderDate: orderlists.orderDate, 
         description: orderlists.description, 
         orderNumber: orderlists.orderNumber, 			
  			 items: orderlists.items
  		});
  	});
  	let newData = JSON.stringify(saveData);
  	this.storage.set('orderlists', newData);	
  }




  public addOrder(order: any): void {
  	if(!(this.orders.indexOf(order) > -1)){
  		this.orders.push(order);
  	}
  }
 
  public deleteOrder(order: any): void {
  	let index = this.orders.indexOf(order);

  	if(index > -1){
  		this.orders.splice(index,1);
  	}
  }

}
