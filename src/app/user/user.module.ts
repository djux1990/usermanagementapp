import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserbaseComponent } from './userbase/userbase.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { UsertableheaderComponent } from './components/usertableheader/usertableheader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateuserComponent } from './createuser/createuser.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserbaseComponent, ActiveusersComponent,
    UsertableheaderComponent, CreateuserComponent, AddcustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmoduleModule,
    FontAwesomeModule,
    UserRoutingModule
  ]
})
export class UserModule { }
