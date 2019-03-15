import { constants } from './../../../constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'th-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  public navigationList: any;
  public menuTitle!: string;
  public menuArray: any[] = [];

  public activeItem: any;
  constructor() { }

  public ngOnInit(): void {
    this.navigationList = constants.navGroup;
    this.activeItem = this.navigationList[0].listItems[0];
    this.activeItem.active = true;
  }

  public forwardSubmenu(menus: any, parent: any): any {
    this.menuArray.push({ parent: parent, menu: menus });
  }
  public backwardSubmenu(): any {
    this.menuArray.pop();
  }
  public onSelect(item: any): void {
    this.activeItem.active = false;
    if (this.menuArray.length > 0) {
      this.activeItem =  this.menuArray[0].parent;
    } else {
      this.activeItem = item;
    }
    this.activeItem.active = true;
  }
  public get submenus(): any {
    const length = this.menuArray.length;
    if (length > 0) {
      const item = this.menuArray[length - 1];
      this.menuTitle = item.parent.name;
      return item.menu;
    }
    return null;
  }
}
