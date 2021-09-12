import { Component, OnInit } from '@angular/core';
import { Competitions } from '../competitions';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  competitions: Competitions[] = [];

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
      this.httpService.getData().subscribe((data: Competitions[]) => {console.log(data); this.competitions=data;});

 
  }

}
