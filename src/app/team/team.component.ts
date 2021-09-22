import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    teams: Team[] = [];
    textSearch: string = '';

    constructor(private httpService: HttpService) {

    }

    ngOnInit(): void {
      this.httpService.getTeam().subscribe((data: Team[]) => {console.log(data); this.teams=data;});
    }

    onSearchChange(): void {
        if(this.textSearch) {
            const teams = this.teams;
            const search = this.textSearch;
            this.teams = teams.filter(function(team) {
                return team.name.indexOf(search)>-1;
            })
        } else {
            this.httpService.getTeam().subscribe((data: Team[]) => {this.teams=data;});
        }
    }

}
