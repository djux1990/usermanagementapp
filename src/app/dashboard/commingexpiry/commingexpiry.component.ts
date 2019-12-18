import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commingexpiry',
  templateUrl: './commingexpiry.component.html',
  styleUrls: ['./commingexpiry.component.scss']
})
export class CommingexpiryComponent implements OnInit {

 colorcode = '#FF808B';
 chartlbl = 'Coming Expiry Amp User';
 chartda;
 constructor() { }

 ngOnInit() {
   this.chartda = [30, 159, 90, 181, 46, 96, 130, 34, 57, 88, 122, 134];
 }

}
