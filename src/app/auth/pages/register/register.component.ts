import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, invalidUsername, nameSurnamePattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

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
      Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    
    username: ['', [
      Validators.required, this.vs.invalidUsername]],
    
    password: ['', [
      Validators.required,
      Validators.minLength(6)]],
    
    confirmPassword: ['', [
      Validators.required]],
    
  }, {
    validators: [this.vs.equalInputs('password', 'confirmPassword')]
  })
 
  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'John',
      email: 'test@test.com',
      username: 'foo',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  invalidInput(input: string) {
    return this.myForm.get(input)?.invalid
      && this.myForm.get(input)?.touched;
  }

  emailRequired() {
    return this.myForm.get('email')?.errors?.required
      && this.myForm.get('email')?.touched;
  }
  
  emailPattern() {
    return this.myForm.get('email')?.errors?.pattern
      && this.myForm.get('email')?.touched;
  }
  
  emailRegistered() {
    return this.myForm.get('email')?.errors?.emailRegistered
      && this.myForm.get('email')?.touched;
  } 

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
