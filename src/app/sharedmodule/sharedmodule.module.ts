import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuactiveDirective } from './directives/menuactivedirective/menuactive.directive';
import { OpendropdownDirective } from './directives/opendropdowndirective/opendropdown.directive';
import { PagehaderComponent } from './components/pagehader/pagehader.component';
import { BarcartComponent } from './components/barcart/barcart.component';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackComponent } from './components/back/back.component';
import { PersonaldetailsformComponent } from './components/personaldetailsform/personaldetailsform.component';
import { AmcdetailsformComponent } from './components/amcdetailsform/amcdetailsform.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UseritemComponent } from './components/useritem/useritem.component';

@NgModule({
  declarations: [MenuactiveDirective, OpendropdownDirective, PagehaderComponent,
     BarcartComponent, BackComponent, PersonaldetailsformComponent, AmcdetailsformComponent, UseritemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ MenuactiveDirective, OpendropdownDirective, PagehaderComponent,
     BarcartComponent, BackComponent, PersonaldetailsformComponent, AmcdetailsformComponent , UseritemComponent]
})
export class SharedmoduleModule { }
