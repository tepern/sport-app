import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { CompetitionMatchesComponent } from './competition-matches/competition-matches.component';
import { TeamMatchesComponent } from './team-matches/team-matches.component';
import { DateFilterComponent } from './date-filter/date-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    TeamComponent,
    CompetitionMatchesComponent,
    TeamMatchesComponent,
    DateFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
