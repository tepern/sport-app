import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Competitions } from './competitions';
import {from} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.football-data.org/v2/competitions/';

  getData() {

    const $data = fetch(this.apiUrl,
       {
          headers: {
            'X-Auth-Token': 'YOUR_API_TOKEN',
            'Content-Type': 'application/json',
          },
          method: 'GET', // GET, POST, PUT, DELETE
          mode: 'no-cors' // the most important option
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

    return $data;

  }
}
