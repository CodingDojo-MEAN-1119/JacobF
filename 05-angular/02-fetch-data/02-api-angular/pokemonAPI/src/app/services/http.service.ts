import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    const favoritePokemon = this.http.get('https://pokeapi.co/api/v2/pokemon/1/');
    favoritePokemon.subscribe(data => {
      let returnStr = `${data.name}'s abilities are `;
      for(let ability of data.abilities) {
        console.log(ability.ability.name);
      }
      return console.log(returnStr);
    });

  }

}
