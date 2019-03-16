import { Component, ViewChild, ElementRef, HostBinding, OnInit } from '@angular/core';
import { ApplicationMetadata } from '../core/application-metadata';
import { ApplicationBuilderService } from '../core/application-builder.service';

@Component({
  selector: 'th-application-host',
  templateUrl: './application-host.component.html',
  styleUrls: ['./application-host.component.scss']
})
export class ApplicationHostComponent implements OnInit {

  public application!: ApplicationMetadata;

  @ViewChild('frame') public frame: ElementRef;
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.height') height = '100%';

  constructor(private readonly hostService: ApplicationBuilderService) { }

  public ngOnInit(): void {
    this.hostService.application.subscribe((metadata: ApplicationMetadata) => {
      this.application = metadata;
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

