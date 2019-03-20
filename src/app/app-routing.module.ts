import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomerComponent } from './feature/relationship/customer/customer.component';
import { SupplierComponent } from './feature/relationship/supplier/supplier.component';

const featureRoutes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'customer', component: CustomerComponent },
  { path: 'supplier', component: SupplierComponent }
];

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'shell', pathMatch: 'full' },
  { path: 'shell', component: ShellComponent},
  { path: 'relationship', children: featureRoutes },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
