import {Observable} from 'rxjs/Observable';

export class OrderModel  {

	ordersList: any;
	ordersObserver: any;

	constructor(private orderNumber: string,
				private description:string,
				private orderDate: string,
				public items: any[]) {
		this.items = items;

		this.ordersList = Observable.create(observer => {
								 this.ordersObserver = observer;
						});
	}

	addItem(item): void {
		this.items.push({
			title: item,
			checked: false
		});
		this.ordersObserver.next(true);
	}

	removeItem(item): void {
		let index = this.items.indexOf(item);
		if(index > -1){
			this.items.splice(index, 1);
		}
		this.ordersObserver.next(true);
	}

	renameItem(item, title): void {
		let index = this.items.indexOf(item);
		if(index > -1){
			this.items[index].title = title;
		}
		this.ordersObserver.next(true);
	}

	public orderListUpdates(): Observable<any> {
		return this.ordersList;
	}


}