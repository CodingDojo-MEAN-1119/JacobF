import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersStatusComponent} from './players-status/players-status.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayersAddComponent } from './players-add/players-add.component';

const routes: Routes = [
  { path: 'players', pathMatch: 'full', redirectTo: 'players/list' },
  { path: 'players/list', component: PlayersListComponent },
  { path: 'players/addplayer', component: PlayersAddComponent},
  { path: 'status', component: PlayersStatusComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
