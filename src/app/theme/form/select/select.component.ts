import { Component, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from '../../value-accessor-base';
import { ISelectOptions } from '../../shared/select-options';

@Component({
  selector: 'th-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: SelectComponent, multi: true }]
})
export class SelectComponent extends ValueAccessorBase<any> implements OnInit {
  value: any;
  label: string;
  show;
  @Input() placeholder;
  @Input() options: ISelectOptions[];
  constructor() { super(); }

  ngOnInit() {
    this.label = this.placeholder;
    this.onItemSelected(this.options.find(item => item.selected));
  }
  onClick() {
    this.show = true;
  }
  onFocusOut($event) {
    this.show = false;
  }
  onItemSelected(item: any) {
    if (item) {
      this.value = item.value;
      this.label = item.label;
      this.show = false;
    }
  }
}
