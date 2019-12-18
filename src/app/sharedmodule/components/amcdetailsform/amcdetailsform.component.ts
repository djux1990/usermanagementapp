import { Component, OnInit, forwardRef } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl
} from '@angular/forms';
import { Subscription } from 'rxjs';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
@Component({
  selector: 'app-amcdetailsform',
  templateUrl: './amcdetailsform.component.html',
  styleUrls: ['./amcdetailsform.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },

    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmcdetailsformComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AmcdetailsformComponent),
      multi: true
    }
  ]
})
export class AmcdetailsformComponent implements OnInit {


  form: FormGroup;
  subscriptions: Subscription[] = [];
  get value() {
    return this.form.value;
  }

  set value(value) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }
  onChange(value: any) {
  }
  onTouched() {
  }
  get startdateControl() {
    return this.form.controls.startdate;
  }

  get durationControl() {
    return this.form.controls.duration;
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      startdate: ['', Validators.required],
      duration: ['', Validators.required]
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnInit() {}
  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { amc: { valid: false, }, };
  }
}
