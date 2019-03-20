import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './form/input/input.component';
import { FileComponent } from './form/file/file.component';
import { DatepickerComponent } from './form/datepicker/datepicker.component';
import { SelectComponent } from './form/select/select.component';
import { MultiSelectComponent } from './form/multi-select/multi-select.component';
import { CheckboxComponent } from './form/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    InputComponent,
    FileComponent,
    DatepickerComponent,
    SelectComponent,
    MultiSelectComponent,
    CheckboxComponent],
  exports: [
    InputComponent,
    FileComponent,
    DatepickerComponent,
    SelectComponent,
    MultiSelectComponent,
    CheckboxComponent
  ],
  providers: [DatePipe]
})
export class ThemeModule { }
