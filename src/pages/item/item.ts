import { Component } from '@angular/core';
import { NavController, NavParams, ViewController , Events} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkFirstCharacterValidator ,checkValueGreaterThan0,checkValueIsNumber } from '../validators/customValidators';
import {ItemService} from '../../providers/item-service';

/*
  Generated class for the Item page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
  providers: [ItemService]
})
export class ItemPage {
  
  itemSearch :string = ''	;
  itemSelected :any;

  items:any= [];	
  filterItems:any;


  itemsForm : FormGroup;

	constructor(public navCtrl: NavController, 
				private viewCtrl:ViewController,
				private _events:Events,
				private fb: FormBuilder,
				private itemService:ItemService) {

		this.itemsForm = fb.group({
		  'quantity' : [null, Validators.compose([Validators.required		  					  
		  					  
		  				])]
		  
		});  
	}

	ionViewDidLoad() {
    	this.itemService.getItems().then(data=>{
    				
    		let inventory = (typeof(data) != "undefined") ? JSON.parse(data): [];
    		this.items = inventory.items;

    	});
  	}

  	submitForm(value: any):void{
	   if(!this.itemsForm.valid){return;}
	   let item = this.itemSelected;
	   item.quantity = value.quantity;
	   
	   this._events.publish('item:added',item);
	   this.closeModal();

	}

	onCancel(ev:any){
		this.resetFilter();
	} 

	onItemSelected(item:Object):void{
		this.itemSelected = item;
		this.resetFilter();
		this.itemSearch ='';		 
	}

	getItems(ev: any) {
	    // set val to the value of the searchbar
	    let val = ev.target.value;
	  	
	  	if (!val || val.trim() == '') { this.resetFilter(); return;};

	    this.filterItems = this.items.filter((item) => {
	        return (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    
	  }

	private resetFilter(){
		this.filterItems =[];
	}

	closeModal():void{
		this.viewCtrl.dismiss()
	}

}   
