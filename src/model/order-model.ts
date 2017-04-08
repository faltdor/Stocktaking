import {Observable} from 'rxjs/Observable';

export class OrderModel  {

	ordersList: any;
	ordersObserver: any;
	items: any[];

	constructor(private orderNumber: string,
				private description:string,
				private orderDate: string,
				private itemsList: any[]) {
		this.items = itemsList;

		this.ordersList = Observable.create(observer => {
								 this.ordersObserver = observer;
						});
	}

	addItem(item): void {
		console.log(this.items.indexOf(item));
		(!(this.items.indexOf(item) > -1)) ? this.items.push(item) : this.renameItem(item);
		//this.ordersObserver.next(true);
			
	}

	removeItem(item): void {
		let index = this.items.indexOf(item);
		if(index > -1){
			this.items.splice(index, 1);
		}
		//this.ordersObserver.next(true);
	}

	renameItem(item): void {
		let index = this.items.indexOf(item);

		//{code: '0001', description: 'Test 1 Description', unit: 'UND',quantity:'100',observation:'xxxxxx'},
		if(index > -1){
			console.log('find item to update');	
			this.items[index].code = item.code;
			this.items[index].description = item.unit;
			this.items[index].quantity = item.quantity;
			this.items[index].observation = item.observation;
			console.log('find item to update');		

		}
		//this.ordersObserver.next(true);
	}

	public orderListUpdates(): Observable<any> {
		return this.ordersList;
	}


}