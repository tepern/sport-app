import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Competitions } from './competitions';
import {from} from 'rxjs';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.football-data.org/v2/competitions/';

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
}
