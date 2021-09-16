import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeagueComponent} from './league/league.component';
import {TeamComponent} from './team/team.component';
import {CompetitionMatchesComponent} from './competition-matches/competition-matches.component';

const routes: Routes = [
    {path: '', component: LeagueComponent},
    {path: 'teams', component: TeamComponent},
    {path: 'matches', component: CompetitionMatchesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}