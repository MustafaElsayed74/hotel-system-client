import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing-module';
import { Customer } from './customer';
import { Rooms } from './components/rooms/rooms';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Customer,
    Rooms
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
