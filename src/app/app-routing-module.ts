import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './auth/components/register/register';
import { Login } from './auth/components/login/login';
const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer-module').then(m => m.CustomerModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin-module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
