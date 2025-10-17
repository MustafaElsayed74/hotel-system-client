import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './admin';
import { Dashboard } from './components/dashboard/dashboard';
import { CreateRoom } from './components/create-room/create-room';
import { DemoNgZorroAntdModule } from "../../DemoNgZorroAntdModule";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Admin,
    Dashboard,
    CreateRoom
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
