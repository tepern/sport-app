import { Component, OnInit, OnChanges } from '@angular/core';
import { Match } from '../match';
import { Teams } from '../match';
import { Season } from '../competitions';
import { Competition } from '../match';
import { HttpService } from '../http.service';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competition-matches',
  templateUrl: './competition-matches.component.html',
  styleUrls: ['./competition-matches.component.css']
})
export class CompetitionMatchesComponent implements OnInit {

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
        this.httpService.getCompetitionMatches(this.id, this.startDate, this.endDate).subscribe((data: Match[]) => {
            console.log(data); 
            console.log(this.startDate);
            this.matches=data;
        });
    }

    applyFilter(formData: any): void {
        this.httpService.getCompetitionMatches(this.id, this.startDate, this.endDate).subscribe((data: Match[]) => {
            console.log(data); 
            this.matches=data;
        });
        console.log(formData);
        let startFilter = '';
        let endFilter = '';
        let filterDate = '';
        const loc = window.location.search;
        if(formData.startDate.length == 10) {
            startFilter = 'dateFrom=' + formData.startDate;
        }

        if(formData.endDate.length == 10) {
            endFilter = 'dateTo=' + formData.endDate;
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
