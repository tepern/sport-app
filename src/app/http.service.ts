import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Competitions } from './competitions';
import { Season } from './competitions';
import { Team } from './team';
import { Match } from './match';
import { Teams } from './match';
import { Competition } from './match';
import {from} from 'rxjs';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.football-data.org/v2/competitions/';
  teamUrl = 'https://api.football-data.org/v2/teams/';

  /*const httpOptions = {
	headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'X-Auth-Token': 'YOUR_API_TOKEN'
	})
};*/

  getData():Observable<Competitions[]> {

    const $data = fetch(this.apiUrl,
       {
          headers: {
            'X-Auth-Token': '130163d1133e44af8cd858e1002d520a',
          },
          method: 'GET', // GET, POST, PUT, DELETE
        }

    ).then(response => {

        if (response.status !=200) {
            return null;
        }  else {
           return response.json();
        }
    },
    failResponse => {
       return null;
    });

    return from($data).pipe(map((data:any)=>{
        return data["competitions"];})

       );
   }


     getTeam():Observable<Team[]> {
        
	    const $data = fetch(this.teamUrl,
	       {
	          headers: {
	            'X-Auth-Token': '130163d1133e44af8cd858e1002d520a',
	          },
	          method: 'GET', // GET, POST, PUT, DELETE
	        }

	    ).then(response => {

	        if (response.status !=200) {
	            return null;
	        }  else {
	           return response.json();
	        }
	    },
	    failResponse => {
	       return null;
	    });

	    return from($data).pipe(map((data:any)=>{
	        return data["teams"];})

	       );
   }

   getCompetitionMatches(id: number, startDate: string, endDate: string): Observable<Match[]> {
        let startFilter = '';
        let endFilter = '';
        let filterDate = '';

        if(startDate.length == 10) {
            startFilter = 'dateFrom=' + startDate;
        }

        if(endDate.length == 10) {
            endFilter = 'dateTo=' + endDate;
        }

        if(endFilter.length > 10 && startFilter.length > 10) {
            filterDate = '?' + startFilter + '&' + endFilter;
        } else if(endFilter.length > 10) {
            filterDate = '?' + endFilter;
        } else if(startFilter.length > 10) {
            filterDate = '?' + startFilter; 
        }

        const $data = fetch(this.apiUrl+id+'/matches'+filterDate,
	       {
	          headers: {
	            'X-Auth-Token': '130163d1133e44af8cd858e1002d520a',
	          },
	          method: 'GET', // GET, POST, PUT, DELETE
	        }

		    ).then(response => {

		        if (response.status !=200) {
		            return null;
		        }  else {
		           return response.json();
		        }
		    },
		    failResponse => {
		       return null;
		    });

	    return from($data).pipe(map((data:any)=>{
	        const matches = data["matches"];
	        const competition = data["competition"];
	        return matches.map(function(match: any): Match {
	           const homeTeam = new Teams(match.homeTeam.id, match.homeTeam.name);
	           const awayTeam = new Teams(match.awayTeam.id, match.awayTeam.name);
	           const season = new Season(match.season.id, match.season.startDate, match.season.endDate, match.season.currentMatchday);
	           const competitionData = new Competition(competition.id, competition.name);
	           return new Match(match.id, homeTeam, awayTeam, competitionData, season); 
	        });


	      })

    );
   }


    getTeamMatches(id: number, startDate: string, endDate: string): Observable<Match[]> {
        let startFilter = '';
        let endFilter = '';
        let filterDate = '';

        if(startDate.length == 10) {
            startFilter = 'dateFrom=' + startDate;
        }

        if(endDate.length == 10) {
            endFilter = 'dateTo=' + endDate;
        }

        if(endFilter.length > 10 && startFilter.length > 10) {
            filterDate = '?' + startFilter + '&' + endFilter;
        } else if(endFilter.length > 10) {
            filterDate = '?' + endFilter;
        } else if(startFilter.length > 10) {
            filterDate = '?' + startFilter; 
        }

        const $data = fetch(this.teamUrl+id+'/matches/'+filterDate,
	       {
	          headers: {
	            'X-Auth-Token': '130163d1133e44af8cd858e1002d520a',
	          },
	          method: 'GET', // GET, POST, PUT, DELETE
	        }

		    ).then(response => {

		        if (response.status !=200) {
		            return null;
		        }  else {
		           return response.json();
		        }
		    },
		    failResponse => {
		       return null;
		    });

	    return from($data).pipe(map((data:any)=>{
	        const matches = data["matches"];
	        
	        return matches.map(function(match: any): Match {
	           const homeTeam = new Teams(match.homeTeam.id, match.homeTeam.name);
	           const awayTeam = new Teams(match.awayTeam.id, match.awayTeam.name);
	           const season = new Season(match.season.id, match.season.startDate, match.season.endDate, match.season.currentMatchday);
	           const competitionData = new Competition(match.competition.id, match.competition.name);
	           return new Match(match.id, homeTeam, awayTeam, competitionData, season); 
	        });


	      })

    );
   }
}
