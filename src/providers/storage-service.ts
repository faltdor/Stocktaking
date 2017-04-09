import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  constructor(public storage: Storage) {
  	console.log('create StorageService')
  	/*let order = [{
         orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', 
         description: 'Test 1 Description', 
         orderNumber: '39.99', 
         items:  [
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 1 Description', orderNumber: '39.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 2 Description', orderNumber: '29.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 3 Description', orderNumber: '19.99'}
          ]
        },
         {
         orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', 
         description: 'Test 1 Description', 
         orderNumber: '39.99', 
         items:  [
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 1 Description', orderNumber: '39.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 2 Description', orderNumber: '29.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 3 Description', orderNumber: '19.99'}
          ]
        },
        {
         orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', 
         description: 'Test 1 Description', 
         orderNumber: '39.99', 
         items:  [
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 1 Description', orderNumber: '39.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 2 Description', orderNumber: '29.99'},
            {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 3 Description', orderNumber: '19.99'}
          ]
        }

        ]

     this.saveOrders(order);*/
   
  }

  public loadOrders():Promise<any>{ 
    console.log('loadorders' + new Date());
  	return this.storage.get('orderlists');
  }

  public saveOrders(data): void {
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
     console.log('Save orders' + new Date());	
  }

}
