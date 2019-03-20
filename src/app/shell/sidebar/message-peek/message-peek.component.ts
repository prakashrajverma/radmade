import { Component, OnInit, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'th-message-peek',
  templateUrl: './message-peek.component.html',
  styleUrls: ['./message-peek.component.scss']
})
export class MessagePeekComponent implements OnInit {

  @Input() public show!: boolean;
  @Output() public showing = new EventEmitter<boolean>();
  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    const inside = this._eref.nativeElement.parentElement.contains(event.target);
    this.show = this.show && inside;
    this.showing.emit(this.show);
  }

}
