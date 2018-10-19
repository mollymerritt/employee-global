import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { State } from 'src/app/models/state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed = true;
  countries: Country[] = [
    {
      'country': 'USA',
      'employees': 100
    }
  ];
  states: State[] = [
    {
      'state': 'CA',
      'employees': 10
    },
    {
      'state': 'TX',
      'employees': 10
    },
    {
      'state': 'WA',
      'employees': 20
    },
    {
      'state': 'OR',
      'employees': 50
    },
    {
      'state': 'MN',
      'employees': 10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
