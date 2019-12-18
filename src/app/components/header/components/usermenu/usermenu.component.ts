import { Component, OnInit } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent implements OnInit {
  faUser = faUser;
  falogout = faPowerOff;
  constructor() { }

  ngOnInit() {
  }

}
