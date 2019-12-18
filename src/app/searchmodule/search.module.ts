import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedmoduleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
