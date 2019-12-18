import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usertableheader',
  templateUrl: './usertableheader.component.html',
  styleUrls: ['./usertableheader.component.scss']
})
export class UsertableheaderComponent implements OnInit {
@Input() activeuser;
  constructor() { }

  ngOnInit() {
  }

}
