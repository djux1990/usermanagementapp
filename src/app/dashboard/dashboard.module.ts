import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { CommingexpiryComponent } from './commingexpiry/commingexpiry.component';
import { ActiveuserComponent } from './activeuser/activeuser.component';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [DashboardComponent, CommingexpiryComponent, ActiveuserComponent, OverviewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedmoduleModule
  ]
})
export class DashboardModule { }
