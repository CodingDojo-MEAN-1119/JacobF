import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersStatusComponent } from './players-status/players-status.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayersAddComponent } from './players-add/players-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersStatusComponent,
    NavComponent,
    PagenotfoundComponent,
    PlayersAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
