import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customer } from './customer';
import { Rooms } from './components/rooms/rooms';

const routes: Routes = [
  { path: '', component: Customer },
  { path: 'rooms', component: Rooms },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
