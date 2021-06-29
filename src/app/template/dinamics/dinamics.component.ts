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

  newGame: string = '';

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

  addGame(){
    const newFavGame: Favs = {
      id: this.person.favs.length + 1,
      name: this.newGame
    }
    this.person.favs.push({...newFavGame});
    this.newGame = '';
  }

  save(){
    console.log('fdssfd');
  }

  delete(i: number){
    this.person.favs.splice(i,1);
  }

}
