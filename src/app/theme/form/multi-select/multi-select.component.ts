import { ISelectOptions } from './../select/select.component';
import { Component, OnInit, Input } from '@angular/core';
import { ValueAccessorBase } from '../../value-accessor-base';

@Component({
  selector: 'th-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent  extends ValueAccessorBase<any> implements OnInit {
  value = [];
  show;
  @Input() placeholder;
  @Input() options: ISelectOptions;
  optionSelected;
  private itemSelect: any[] = [];
  constructor() { super(); }

  ngOnInit() {
    this.optionSelected = this.placeholder;
  }
  onClick() {
    this.show = true;
  }
  onFocusOut($event) {
    this.show = false;
  }
  onItemClicked(item) {
    if ( !item.select) {
      if (this.itemSelect.includes(item.label)) {
        return;
      } else {
        this.itemSelect.push(item.label);
      }
    } else {
      const index = this.itemSelect.indexOf(item.label);
      if (index > -1) {
        this.itemSelect.splice(index, 1);
      }
    }
    this.optionSelected = this.itemSelect.slice(0, 3).join(', ');
    if (this.itemSelect.length > 2 ) {
      this.optionSelected = `${this.itemSelect.length} items; ${this.optionSelected}`
    }
  }
}
