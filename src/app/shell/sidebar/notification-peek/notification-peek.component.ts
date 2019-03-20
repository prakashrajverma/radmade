import { Component, OnInit, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'th-notification-peek',
  templateUrl: './notification-peek.component.html',
  styleUrls: ['./notification-peek.component.scss']
})
export class NotificationPeekComponent implements OnInit {

  @Input() public show!: boolean;
  @Output() public showing = new EventEmitter<boolean>();
  constructor(private readonly _eref: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    const inside = this._eref.nativeElement.parentElement.contains(event.target);
    this.show = this.show && inside;
    this.showing.emit(this.show);
  }

}
