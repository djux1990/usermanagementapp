import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { getSearchResult } from './handlers';
import * as _moment from 'moment';
import { FormBuilder, FormGroup } from '@angular/forms';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class SearchComponent implements OnInit {
  searchfilter: FormGroup;
  result: { id: number; month: string; usertext: string; };

  constructor( private formbuilder : FormBuilder, private route: ActivatedRoute) {
    this.searchfilter = this.formbuilder.group({
      amcdate: [''],
      status: [''],
      usertype: ['']
    });
   }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const month = params.month;
      const id = params.id;
      const usertext = params.text;
      this.result = await getSearchResult({id, month, usertext});

  });
  }
  applyFilters() {
console.log(this.searchfilter);
  }

}
