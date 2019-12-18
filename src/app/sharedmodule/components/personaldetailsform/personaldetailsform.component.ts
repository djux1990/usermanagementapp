import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: number;
}
@Component({
  selector: 'app-personaldetailsform',
  templateUrl: './personaldetailsform.component.html',
  styleUrls: ['./personaldetailsform.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonaldetailsformComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonaldetailsformComponent),
      multi: true,
    }
  ]
})
export class PersonaldetailsformComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  get value(): ProfileFormValues {
    return this.form.value;
  }

  set value(value: ProfileFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get emailControl() {
    return this.form.controls.email;
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [],
      email: ['', Validators.required],
      mobileno: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],


    });
    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  onTouched() {

  }
  onChange(value: ProfileFormValues) {
  }

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

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.form.valid ? null : { profile: { valid: false, }, };
  }

}
