import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { HeaderComponent } from './components/header/header.component';
import { UsermenuComponent } from './components/header/components/usermenu/usermenu.component';
import { NotificationComponent } from './components/header/components/notification/notification.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { SearchModule } from './searchmodule/search.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    UsermenuComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SearchModule,
    DashboardModule,
    UserModule,
    SharedmoduleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
