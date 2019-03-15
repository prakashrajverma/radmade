import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'th-message-peek',
  templateUrl: './message-peek.component.html',
  styleUrls: ['./message-peek.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class MessagePeekComponent implements OnInit {

  @Input() public show!: boolean;
  @Output() public showing = new EventEmitter<boolean>();
  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }
  onClick(event) {
    const inside = this._eref.nativeElement.parentElement.contains(event.target);
    this.show = this.show && inside;
    this.showing.emit(this.show);
  }

}
