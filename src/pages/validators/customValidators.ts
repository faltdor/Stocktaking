import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup } from "@angular/forms";


export function checkFirstCharacterValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = /^\d/.test(control.value);
	return (valid) ? {checkFirstCharacterValidatorOutput: true} : null;
  };
}

export function checkValueGreaterThan0(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
     
     

    return   (parseInt(control.value) >0 ) ? {greaterThan0: true} : {greaterThan0: false};

	
  };
}

export function checkValueIsNumber(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
   
    return  isNaN(control.value) ? {isNumber: true} : {isNumber: false};
	
  };
}