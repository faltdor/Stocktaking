import { TestBed, ComponentFixture, async } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavController , NavParams ,ModalController , Events,ViewController} from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { OrderPage } from './order';

import { NavMock, OrderServiceMock ,NavParamsMock ,ViewControllerMock ,ModalControllerMock} from '../../mocks';
import { OrderService } from '../../providers/order-service';

import {EventsMock} from 'ionic-mocks';

let comp: OrderPage;
let fixture: ComponentFixture<OrderPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Order Page',()=>{
	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations: [MyApp, OrderPage],
 
            providers: [
                 {provide: NavController , useClass: NavMock},
                 {provide: NavParams, useClass: NavParamsMock},
                 {provide: ViewController, useClass: ViewControllerMock},
                 {provide: ModalController, useClass: ModalControllerMock},
                 {provide: Events, useClass: EventsMock},
                 {provide: OrderService, useClass: OrderServiceMock},
                 

       
                 
                 
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
		}).compileComponents();
	}));
	beforeEach(()=>{
		fixture =  TestBed.createComponent(OrderPage);
		comp = fixture.componentInstance;

		/*NavParamsMock.setParams(ownParams); //set your own params here
		  TestBed.configureTestingModule({
		    providers: [
		      {provide: NavParams, useClass: NavParamsMock},
		    ]
		  });*/


	});
	afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('is created',()=>{
    	expect(comp).toBeTruthy();
    	expect(fixture).toBeTruthy();
    })
});