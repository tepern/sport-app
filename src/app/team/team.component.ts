import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[] = [];
  search: string = '';

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
      this.httpService.getTeam().subscribe((data: Team[]) => {console.log(data); this.teams=data;});

 
  }

}
