import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss']
})
export class SidebarFooterComponent implements OnInit {
  public showNotification!: boolean;
  public showMessage!: boolean;
  constructor() { }

  ngOnInit() {
  }

}
