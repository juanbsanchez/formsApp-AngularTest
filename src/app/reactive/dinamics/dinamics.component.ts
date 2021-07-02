import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  name: string;
  favs: Favs[];
}

interface Favs {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  newGame: string = '';

  person: Person = {
    name: 'John',
    favs: [
      {
        id: 1,
        name: 'Metal Gear'
      },
    ]
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    favs: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Jurasic Park', Validators.required]
    ], Validators.required)
  })

  get favsArr() {
    return this.myForm.get('favs') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)
  }

  addGame() {

  }

  delete() {

  }

  isValidField(field: string) {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched;
  }

}
