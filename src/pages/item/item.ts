import { Component } from '@angular/core';
import { NavController, ViewController , Events , NavParams} from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
//import { checkFirstCharacterValidator ,checkValueGreaterThan0,checkValueIsNumber } from '../validators/customValidators';
import { ItemService } from '../../providers/item-service';

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
  quantity : string = '';
  itemSelected :any;

  items:any= [];	
  filterItems:any;


  //itemsForm : FormGroup;

	constructor(public navCtrl: NavController, 
				private viewCtrl:ViewController,
				public navParams: NavParams,
				private _events:Events,
				private fb: FormBuilder,
				private itemService:ItemService) {

		/*this.itemsForm = fb.group({
		  'quantity' : [null, Validators.compose([Validators.required		  					  
		  					  
		  				])]
		  
		});*/
		this.items = [] ;
	}

	ionViewDidLoad() {
    	this.itemService.getItems().then(data=>{
    				
    		let inventory = ((data != "undefined" && data != null)) ? JSON.parse(data): [];
    		this.items = inventory.items;


    	});

    	let parmItem = this.navParams.get('item');
 	    if(parmItem != 'undefined' && parmItem != null) {
 	    	console.log(parmItem);
			this.itemSelected = parmItem;
			//this.itemsForm.controls['quantity'].patchValue(parmItem.quantity,{onlySelf: true, emitEvent:true});
			this.quantity = parmItem.quantity;
			console.log(this.quantity);
			//console.log(this.itemsForm.controls['quantity'].value)

		}
  	}

  	submitForm(value: any):void{
	   //if(!this.itemsForm.valid){return;}
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

	getItems(ev: any):void {
		//if(this.items.length ==='undefined'){return;}

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
		this.viewCtrl.dismiss();
	}

	inputValue($event:any):void{
		console.log(this.quantity);
		(this.quantity.trim() == '')? this.quantity = '': false;
	}

}   
