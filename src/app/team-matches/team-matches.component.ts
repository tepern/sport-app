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
    startDate: string = '';
    endDate: string = '';

    constructor(private httpService: HttpService, private route: ActivatedRoute) {
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.id = queryParam['id'];
                if(queryParam['dateFrom']) { 
	               this.startDate = queryParam['dateFrom']; 
	            }

	            if(queryParam['dateTo']) { 
	               this.endDate = queryParam['dateTo']; 
	            }
            }
        );
    }

    ngOnInit(): void {
        this.httpService.getTeamMatches(this.id, this.startDate, this.endDate).subscribe((data: Match[]) => {console.log(data); this.matches=data;});
    }

    applyFilter(): void {
        this.httpService.getTeamMatches(this.id, this.startDate, this.endDate).subscribe((data: Match[]) => {
            console.log(data); 
            this.matches=data;
        });
        let startFilter = '';
        let endFilter = '';
        let filterDate = '';
        const loc = window.location.search;
        if(this.startDate.length == 10) {
            startFilter = 'dateFrom=' + this.startDate;
        }

        if(this.endDate.length == 10) {
            endFilter = 'dateTo=' + this.endDate;
        }

        if(endFilter.length > 10 && startFilter.length > 10) {
            filterDate = '&' + startFilter + '&' + endFilter;
        } else if(endFilter.length > 10) {
            filterDate = '&' + endFilter;
        } else if(startFilter.length > 10) {
            filterDate = '&' + startFilter; 
        }  
        window.location.search = '?'+'id='+this.id+filterDate;
    }

    formReset(): void {
        (<HTMLFormElement>document.getElementById("filter")).reset();
    }

}
