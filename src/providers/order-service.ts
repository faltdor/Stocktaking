import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OrderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderService {

	orders: any[] = [];

  constructor(public http: Http) {
    console.log('Hello OrderService Provider');
  }

  public addOrder(order: Object): void {
  	if(!(this.orders.indexOf(order) > -1)){
  		this.orders.push(order);
  	}
  }
 
  public deleteOrder(order: Object): void {
  	let index = this.orders.indexOf(order);

  	if(index > -1){
  		this.orders.splice(index,1);
  	}
  }

}
