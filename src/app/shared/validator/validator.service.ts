import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  invalidUsername(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'john') {
      return {
        noJohn: true
      }
    }
    return null;
  }

  equalInputs(input1: string, input2: string) {
    
    return (formGroup: AbstractControl): ValidationErrors | null => {
      
      const pass1 = formGroup.get(input1)?.value;
      
      const pass2 = formGroup.get(input2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(input2)?.setErrors({noEquals: true})
        return {noEqualInputs: true}
      }
      
      
      formGroup.get(input2)?.setErrors(null)
      return null;
    }
  }

}

