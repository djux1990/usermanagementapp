import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      profile: [],
      amc: []
    });
  }

  ngOnInit() {
  }
  submit() {
    console.log(this.customerForm.value);
  }
}
