import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { Teams } from '../match';
import { Competition } from '../match';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.css']
})
export class TeamMatchesComponent implements OnInit {

    matches: Match[] = [];
    id: any;
    private querySubscription: Subscription;

    constructor(private httpService: HttpService, private route: ActivatedRoute) {
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.id = queryParam['id'];
                
            }
        );
    }

  ngOnInit(): void {
      this.httpService.getTeamMatches(this.id).subscribe((data: Match[]) => {console.log(data); this.matches=data;});

 
  }

}
