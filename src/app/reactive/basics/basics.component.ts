import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  /* 
    myForm: FormGroup = new FormGroup({
      'name': new FormControl('RTX 4080ti'),
      'price': new FormControl(1500),
      'stock': new FormControl(5),
    }) */
  


  myForm: FormGroup = this.fb.group({
    name: [null, [
      Validators.required,
      Validators.minLength(3)]
    ],
    price: [null, [
      Validators.required,
      Validators.minLength(0)
    ]],
    stock: [null, 
      Validators.required,
      Validators.minLength(0)]
  })

  
  constructor(private fb: FormBuilder) { }

  isValidField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
            
  }

}
