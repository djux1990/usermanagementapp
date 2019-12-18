import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisV, faIcons } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.scss']
})
export class UseritemComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  @Input() activeuser;
  constructor() { }

  ngOnInit() {
  }

}
