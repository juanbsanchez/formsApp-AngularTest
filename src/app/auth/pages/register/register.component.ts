import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // TODO temp
  nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  invalidUsername(control: FormControl) {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'john') {
      return {
        noJohn: true
      }
    }
    return null;
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern(this.nameSurnamePattern)
    ]],
    email: ['', [
      Validators.required,
    Validators.pattern(this.emailPattern)]],
    username: ['', [
      Validators.required, this.invalidUsername]]
  })
 
  constructor(private fb: FormBuilder) { }

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
