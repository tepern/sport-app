import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { Teams } from '../match';
import { Competition } from '../match';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-competition-matches',
  templateUrl: './competition-matches.component.html',
  styleUrls: ['./competition-matches.component.css']
})
export class CompetitionMatchesComponent implements OnInit {

  matches: Match[] = [];

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
      this.httpService.getCompetitionMatches(2006).subscribe((data: Match[]) => {console.log(data); this.matches=data;});

 
  }

}
