import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public notification!: boolean;
  public message!: boolean;
  constructor() { }

  ngOnInit() {
  }
}
