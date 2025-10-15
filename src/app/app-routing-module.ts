import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './auth/components/register/register';
import { Login } from './auth/components/login/login';
const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
