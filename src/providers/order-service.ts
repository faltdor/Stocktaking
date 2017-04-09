import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { OrderModel } from '../model/order-model';

import { StorageService } from './storage-service';

/*
  Generated class for the OrderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class OrderService {

  // Observable sources  
  private ordersSource =  new Subject<any>();

  // Observable string streams
  public orderAnnounced$ = this.ordersSource.asObservable();

  private orders: OrderModel[] = [];

  constructor(public storageService: StorageService) {
    
    
  }

  getOrders(): any[] {
    return this.orders;
  };

  public addOrder(order: any): void {
  	if(!(this.orders.indexOf(order) > -1)){
  		this.orders.push(order);
      this.announceChange(this.orders);
      this.storageService.saveOrders(this.orders);
  	}
  }
 
  public deleteOrder(order: any): void {
    let index = this.orders.indexOf(order);
    
  	if(index > -1){      
  		this.orders.splice(index,1);
      this.announceChange(this.orders);
      this.storageService.saveOrders(this.orders);
  	}
  }

  updateOrder(order): void {
    let index = this.orders.indexOf(order);
    
    if(index > -1){                     
      this.orders[index] = order;
      this.announceChange(this.orders);
      this.storageService.saveOrders(this.orders);  

    }
    //this.ordersObserver.next(true);
  }

  announceChange(orders: any) {
    this.ordersSource.next(orders);
  }

  setOrders(orders: OrderModel[]){
    this.orders = orders; 
  }

}
