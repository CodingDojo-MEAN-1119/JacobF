import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ninjaGold';

  constructor(private httpService: HttpService) {}
  gold = 0;
  gameLog = [];

  ngOnInit() {
  }

  goToFarm() {
    const randNum = Math.floor((Math.random() * 4) + 2);
    this.gold += randNum;
    this.gameLog = [... this.gameLog, `You went to the farm and earned ${randNum} gold!`];
  }

  goToCave() {
    const randNum = Math.floor((Math.random() * 6) + 5);
    this.gold += randNum;
    this.gameLog = [... this.gameLog, `You went to the cave and earned ${randNum} gold!`];
  }

  goToHouse() {
    const randNum = Math.floor((Math.random() * 9) + 7);
    this.gold += randNum;
    this.gameLog = [... this.gameLog, `You went to the house and earned ${randNum} gold!`];
  }

  goToCasino() {
    const randNum = Math.floor((Math.random() * 26) + 25);
    console.log(randNum);
    const failChance = Math.floor((Math.random() * 2) + 1);
    if (failChance === 2) {
      this.gold += randNum;
      this.gameLog = [... this.gameLog, `Woohoo! You went to the casino and earned ${randNum} gold!`];
    } else {
        this.gold -= randNum;
        this.gameLog = [... this.gameLog, `Oh no! You went to the casino and lost ${randNum} gold!`];
    }
  }

  resetGame() {
    this.gold = 0;
    this.gameLog = [];
  }

}
