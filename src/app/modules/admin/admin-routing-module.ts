import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin';
import { Dashboard } from './components/dashboard/dashboard';
import { CreateRoom } from './components/create-room/create-room';
import { UpdateRoom } from './components/update-room/update-room';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'room', component: CreateRoom },
  { path: 'room/:id/edit', component: UpdateRoom }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
