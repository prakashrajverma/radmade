import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent } from './relationship/supplier/supplier.component';
import { CustomerComponent } from './relationship/customer/customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'customer', component: CustomerComponent },
  { path: 'supplier', component: SupplierComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
