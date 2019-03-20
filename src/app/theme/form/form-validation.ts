import { ValidatorFn } from '@angular/forms';
export class FormValidation {
    validators: ValidatorFn[] = new Array<ValidatorFn>();
    message: string;
}

export interface Validation {
  invalid: boolean;
  value: string;
  focusOut(): void;
}
