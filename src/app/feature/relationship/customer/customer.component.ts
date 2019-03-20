import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
value;
select;
multiselect;
checkbox;
select_group = [{label: 'Australia', value: 1},
  {label: 'Autria', value: 2},
  {label: 'Afganistan', value: 3},
  {label: 'Africa (South Africa)', value: 4},
  {label: 'Andaman Nikobar Island', value: 5},
  {label: 'China', value: 6},
  {label: 'England', value: 7},
  {label: 'India', value: 8},
  {label: 'Russia', value: 9}];
  constructor() { }

  ngOnInit() {
  }

}
