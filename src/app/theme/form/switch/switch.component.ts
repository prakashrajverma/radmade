import { Component, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from '../../value-accessor-base';

@Component({
  selector: 'th-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: SwitchComponent, multi: true}]
})
export class SwitchComponent extends ValueAccessorBase<boolean> implements OnInit {
  @Input() label;
  constructor() { super(); }

  ngOnInit() {

  }
}
