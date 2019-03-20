import { Component, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorBase } from '../../value-accessor-base';
import { FormValidation, Validation } from '../form-validation';

@Component({
  selector: 'th-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true}]
})
export class InputComponent  extends ValueAccessorBase<string> implements Validation {

  invalid: boolean;
  value;
  validClass: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() validation: FormValidation;


  focusOut() {
    if (this.validation) {
      const control = new FormControl(this.value, this.validation.validators);
      this.invalid = control.status === 'INVALID';
      this.validClass = this.invalid ? 'form-control-danger' : 'form-control-success';
    }
  }

}
