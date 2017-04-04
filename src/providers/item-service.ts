import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';


/*
  Generated class for the Item provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItemService {

  constructor(public storage: Storage) {
  	let order = {
         validity: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)',          
         number: '3999', 
         items:  [
            {code: '0001', description: 'Test 1 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
           	{code: '0002', description: 'Test 2 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
           	{code: '0003', description: 'Test 3 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
           	{code: '0004', description: 'Test 4 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
           	{code: '0005', description: 'Test 5 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
           	{code: '0005', description: 'Test 6 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
            ]
        }

     this.save(order);

  }


  public getItems():Promise<any>{    
  	return this.storage.get('inventory_Validity');
  }

  save(data): void {  	
  	this.storage.set('inventory_Validity', JSON.stringify(data));	
  }

}
