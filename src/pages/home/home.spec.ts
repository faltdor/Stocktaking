import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';

import { NavController } from 'ionic-angular';
import { OrderService } from '../../providers/order-service';

import { NavMock, OrderServiceMock } from '../../mocks';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;
 
describe('Page: Home Page', () => {

    let testOrder : Object;
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [MyApp, HomePage],
 
            providers: [
                 {provide: NavController , useClass: NavMock},
                 {provide: OrderService , useClass: OrderServiceMock}
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(HomePage);
        comp    = fixture.componentInstance;

        testOrder = {
            orderNumber: 'Test Order',
            description: 'Test Description',
            orderDate: 'Fri Mar 31 2017 14:39:41 GMT-0500 (COT)'
        };
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('initialises with a title of Home', () => {
        expect(comp['title']).toEqual('Home');
    });
 
    it('can set the title to a supplied value', () => {
 
        de = fixture.debugElement.query(By.css('ion-title'));
        el = de.nativeElement;  
 
        comp.changeTitle('Your Page');
        fixture.detectChanges();
        expect(comp['title']).toEqual('Your Page');
        expect(el.textContent).toContain('Your Page');
 
    });

    it('Has a list of orders when page loaded',()=>{

        comp.orders.push(testOrder);

        let lengOrders= comp.orders.length;
        expect(lengOrders).toBeGreaterThan(0);
    });

    it('Should load Orders of day from the DB    ',()=>{
        let service = fixture.debugElement.injector.get(OrderService);
        expect(service).toBeTruthy();
        let firstOrder = service.orders[0];
        comp.orders.push(firstOrder);

        fixture.detectChanges();

        expect(comp.orders).toContain(firstOrder);
    });

    it('should display all products contained in orders',()=>{
        let service = fixture.debugElement.injector.get(OrderService);
        fixture.detectChanges();

        de = fixture.nativeElement.getElementsByTagName('h2');

        service.orders.forEach((order,index)=>{
            el = de[index];
            expect(el.innerHTML).toContain(order.orderNumber);
        })

    });
 
});