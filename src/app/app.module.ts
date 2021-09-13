import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
