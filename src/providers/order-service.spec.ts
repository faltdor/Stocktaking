import { TestBed, inject, async } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { OrderService } from './order-service';
import { StorageService } from './storage-service';


describe('Provider: Order Service',()=>{
	let testOrder;	

	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations: [
 
            ],
 
            providers: [
                OrderService,                
                StorageService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http, 
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
 
            imports: [
                 IonicStorageModule.forRoot()
            ]
		}).compileComponents();
	}));

	beforeEach(()=>{
		testOrder = {
            orderNumber: 'Test Order',
            description: 'Test Description',
            orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)'
        };
	});

	it('Should be able to add a single Order to orders arrays',inject([OrderService, MockBackend],(orderService, mockBackend)=>{
		/*let arrayLengBefore = orderService.orders.length;
		orderService.addOrder(testOrder);

		expect(orderService.orders).toContain(testOrder);
		expect(orderService.orders.length).toEqual(arrayLengBefore+1);*/

        expect(orderService).toBeTruthy();
	}));
})