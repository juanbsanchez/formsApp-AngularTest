import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  person = {
    gender: 'F',
    notifications: true,
  }

  termsAndConditions: boolean = false;

}
