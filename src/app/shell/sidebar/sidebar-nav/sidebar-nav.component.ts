import { NavigationGroup } from './../../core/navigation-group';
import { ApplicationBuilderService } from '../../core/application-builder.service';
import { Component, OnInit } from '@angular/core';
import { navigation } from 'src/app/navigation-constant';

@Component({
  selector: 'th-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  public navigationGroups: NavigationGroup[];
  public menuTitle!: string;
  public menuArray: any[] = [];

  public activeItem: any;
  constructor(private readonly applicationService: ApplicationBuilderService) { }

  public ngOnInit(): void {
    this.navigationGroups = navigation;
    this.activeItem = this.navigationGroups[0].navigations[0];
    this.activeItem.active = true;
    this.loadActiveApplication(this.activeItem.metadata);
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
      this.activeItem = this.menuArray[0].parent;
    } else {
      this.activeItem = item;
    }
    this.activeItem.active = true;
    this.loadActiveApplication(item.metadata);
  }

  private loadActiveApplication(metadata: any) {
    this.applicationService
    .loadApplication({ url: metadata.url, title: metadata.title });
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
