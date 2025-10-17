import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing-module';
import { Customer } from './customer';
import { Rooms } from './components/rooms/rooms';


@NgModule({
  declarations: [
    Customer,
    Rooms
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
