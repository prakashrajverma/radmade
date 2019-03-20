import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbDatepickerConfig, NgbDateAdapter, NgbDateNativeUTCAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ValueAccessorBase } from '../../value-accessor-base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'th-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter },
    { provide: NG_VALUE_ACCESSOR, useExisting: DatepickerComponent, multi: true }],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent extends ValueAccessorBase<Date> implements OnInit {

  public format = 'yyyy-MM-dd';
  public datepicker: Date;

  constructor(
    private readonly datepickerConfig: NgbDatepickerConfig) { super(); }

  ngOnInit() {
    this.datepickerConfig.minDate = { year: 1900, month: 1, day: 1 };
  }

  onDateSelect() {
    if (this.datepicker.toDateString() !== 'Invalid Date') {
      this.value = this.datepicker;
    }
  }
}
