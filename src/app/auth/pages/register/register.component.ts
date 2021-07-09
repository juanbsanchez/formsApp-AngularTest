import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, invalidUsername, nameSurnamePattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern(this.vs.nameSurnamePattern)
    ]],
    email: ['', [
      Validators.required,
    Validators.pattern(this.vs.emailPattern)]],
    username: ['', [
      Validators.required, this.vs.invalidUsername]]
  })
 
  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'John',
      email: 'test@test.com',
      username: 'foo'
    })
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
