import { Component, Input } from '@angular/core';
import { ValueAccessorBase } from '../../value-accessor-base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'th-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: CheckboxComponent, multi: true}]

})
export class CheckboxComponent extends ValueAccessorBase<boolean> {
  value;
  @Input() label: string;
  constructor() { super(); }

}
