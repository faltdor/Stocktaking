import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavController , NavParams } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { ItemPage } from './item';

import { NavMock, NavParamsMock} from '../../mocks';

let comp: ItemPage;
let fixture: ComponentFixture<ItemPage>;
let de: DebugElement;
let el: HTMLElement;


describe('Page: Item Page',()=>{
	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations: [MyApp,ItemPage],
			providers : [
				{provide: NavController , useClass: NavMock},
                {provide: NavParams, useClass: NavParamsMock}
			],
			imports :[
				IonicModule.forRoot(MyApp)
			]
		}).compileComponents();
	}));

	beforeEach(()=>{
		fixture = TestBed.createComponent(ItemPage);
		comp = fixture.componentInstance;

	});

	afterEach(()=>{
		fixture.destroy();
		comp = null;
		de = null;
		el = null;
	});

	it('Is created',()=>{
		expect(comp).toBeTruthy();
		expect(fixture).toBeTruthy();
	})

})