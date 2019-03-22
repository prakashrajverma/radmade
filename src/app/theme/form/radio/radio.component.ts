import { Component, OnInit, Input } from '@angular/core';
import { ValueAccessorBase } from '../../value-accessor-base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelectOptions } from '../../shared/select-options';

@Component({
  selector: 'th-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: RadioComponent, multi: true}]
})
export class RadioComponent extends ValueAccessorBase<string> implements OnInit {
  value;
  @Input() options: ISelectOptions[];
  constructor() { super(); }

  ngOnInit() {
  }
  radioChecked(option) {
    this.value = {value: option.value, label: option.label};
  }
}
