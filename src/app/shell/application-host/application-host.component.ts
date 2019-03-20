import { NavigationGroup, Navigationfilter } from './../core/navigation-group';
import { Component, ViewChild, ElementRef, HostBinding, OnInit } from '@angular/core';
import { ApplicationMetadata } from '../core/application-metadata';
import { ApplicationBuilderService } from '../core/application-builder.service';
import { navigation } from './../../navigation-constant';

@Component({
  selector: 'th-application-host',
  templateUrl: './application-host.component.html',
  styleUrls: ['./application-host.component.scss']
})
export class ApplicationHostComponent implements OnInit {

  public applications: ApplicationMetadata[] = [];
  private activeApp: ApplicationMetadata;

  @ViewChild('frame') public frame: ElementRef;
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.height') height = '100%';

  constructor(private readonly hostService: ApplicationBuilderService) { }

  public ngOnInit(): void {
    navigation.forEach((navG: NavigationGroup) => {
      this.getApplicationsFromNavigationfilter(navG.navigations);
    });
    this.hostService.application.subscribe((id: string) => {
      if (this.activeApp) {
        this.activeApp.active = false;
      }
      this.activeApp = this.applications.find((app: ApplicationMetadata) => app.id === id);
      if (this.activeApp) {
        this.activeApp.active = true;
      }
    });
  }

  private getApplicationsFromNavigationfilter(navigations: Navigationfilter[]): void {
    navigations.forEach((nav: Navigationfilter) => {
      if (nav.children) {
        this.getApplicationsFromNavigationfilter(nav.children);
      } else {
        this.applications.push(nav.metadata);
      }
    });
  }

  public show(): void {
    this.frame.nativeElement.style.height = '100vh';
    this.frame.nativeElement.style.width = '100vw';
  }

  public hide(): void {
    this.frame.nativeElement.style.height = '0px';
    this.frame.nativeElement.style.width = '0px';
  }
}

