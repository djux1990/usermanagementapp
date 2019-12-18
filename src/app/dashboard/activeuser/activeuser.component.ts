import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.scss']
})
export class ActiveuserComponent implements OnInit {


  colorcode = '#9898D6';
  chartlbl = 'Active Users';
  chartda;
  constructor() { }

  ngOnInit() {
    this.chartda = [165, 59, 80, 181, 56, 76, 30, 44, 56, 67, 78, 89, 99];
  }

}
