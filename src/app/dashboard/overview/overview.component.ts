import { Component, OnInit, Input, Renderer2, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() ovrno;
  @Input() ovrtitle;
  @Input() colorcode;

  constructor() { }

  ngOnInit() {

  }
  getColorCode() {
    const colorcodes = {
      'background' : this.colorcode
    };
    return colorcodes;
        }


}
