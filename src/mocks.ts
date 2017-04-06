import { OrderModel } from './model/order-model';

export class ConfigMock {
 
  public get(): any {
    return '';
  }
 
  public getBoolean(): boolean {
    return true;
  }
 
  public getNumber(): number {
    return 1;
  }
}
 
export class FormMock {
  public register(): any {
    return true;
  }
}
 
export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }
}
 
export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}
 
export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}


export class NavParamsMock {
  static returnParam = null;
  public get(key): any {
    if (NavParamsMock.returnParam) {
       return NavParamsMock.returnParam
    }
    return 'default';
  }
  static setParams(value){
    NavParamsMock.returnParam = value;
  }
}


export class OrderServiceMock {

  public orders: OrderModel[] = [];


   constructor(){
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

     let newOrder = new OrderModel(order[0].orderNumber,
                                    order[0].description,
                                    order[0].orderDate,
                                   order[0].items);
     this.orders.push(newOrder); 
   }

  public getOrder(){    
    return this.orders;
  }
 
  public addOrder(order: Object): void {}
 
  public deleteOrder(order: Object): void {}
 
}


export class StorageServiceMock {

}

import { ViewController, ModalController } from 'ionic-angular';

export class ViewControllerMock extends ViewController {
  
}

export class EventsMock{}

export class ModalControllerMock extends ModalController{}

