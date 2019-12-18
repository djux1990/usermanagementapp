import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserbaseComponent } from './userbase/userbase.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';


const routes: Routes = [
  {
    path: 'userbase',
    component: UserbaseComponent
  },
  {
    path: 'activeusers',
    component: ActiveusersComponent
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  },
  {
    path: 'addcustomer',
    component: AddcustomerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
