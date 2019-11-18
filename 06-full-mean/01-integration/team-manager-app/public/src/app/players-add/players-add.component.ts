import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-players-add',
  templateUrl: './players-add.component.html',
  styleUrls: ['./players-add.component.css']
})
export class PlayersAddComponent implements OnInit {
  newPlayer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newPlayer = {name: '', prefPosition: ''};
  }

  onSubmit() {
    console.log(this.newPlayer);
    this.router.navigate(['/players/list']);
  }

}
