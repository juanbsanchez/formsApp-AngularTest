import { Component } from '@angular/core';

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
export class DinamicsComponent {

  person: Person = {
    name: 'John',
    favs: [
      {
        id: 1,
        name: 'Metal Gear'
      },
      {
        id: 2,
        name: 'Age of Empires'
      }
    ]
  }


  save(){
    console.log('fdssfd');
  }

}
