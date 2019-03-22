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
import { RadioComponent } from './form/radio/radio.component';
import { SwitchComponent } from './form/switch/switch.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TileComponent } from './tile/tile.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { SafeUrlPipe } from './shared/safe-url.pipe';
import { SafeHtmlPipe } from './shared/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    SafeUrlPipe,
    SafeHtmlPipe,
    InputComponent,
    FileComponent,
    DatepickerComponent,
    SelectComponent,
    MultiSelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    ProgressbarComponent,
    TileComponent,
    PaginationComponent,
    CardGroupComponent,
    CardComponent,
    TableComponent],
  exports: [
    InputComponent,
    FileComponent,
    DatepickerComponent,
    SelectComponent,
    MultiSelectComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    ProgressbarComponent,
    TileComponent,
    TableComponent
  ],
  providers: [DatePipe]
})
export class ThemeModule { }
