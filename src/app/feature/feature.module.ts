import { FormsModule } from '@angular/forms';
import { ThemeModule } from './../theme/theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CustomerComponent } from './relationship/customer/customer.component';
import { SupplierComponent } from './relationship/supplier/supplier.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeatureRoutingModule,
    ThemeModule,
    FlexLayoutModule
  ],
  declarations: [CustomerComponent, SupplierComponent]
})
export class FeatureModule { }
