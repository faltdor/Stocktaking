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


export class OrderServiceMock {
 
  public orders = [
    {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 1 Description', orderNumber: '39.99'},
    {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 2 Description', orderNumber: '29.99'},
    {orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)', description: 'Test 3 Description', orderNumber: '19.99'}
  ];
 
  public addOrder(order: Object): void {}
 
  public deleteOrder(order: Object): void {}
 
}