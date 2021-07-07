import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // TODO temp
  nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  myForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern(this.nameSurnamePattern)
    ]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  invalidInput(input: string) {
    return this.myForm.get(input)?.invalid
      && this.myForm.get(input)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
