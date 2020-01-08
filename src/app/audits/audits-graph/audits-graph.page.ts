import { Component, OnInit } from '@angular/core';
import { ChartData, AuditShort } from '../audits.model';
import { AuditsGraphService } from './audits-graph.service';
import * as regression from 'regression';

@Component({
  selector: 'app-audits-graph',
  templateUrl: './audits-graph.page.html',
  styleUrls: ['./audits-graph.page.scss'],
})
export class AuditsGraphPage implements OnInit {
  isLoading: boolean;
  auditsAverageChart: ChartData[];
  lineChart: any[];
  value: number;
  multi: any[];
  data: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = 'right';
  showXAxisLabel = true;
  xAxisLabel = 'Audits';
  showYAxisLabel = true;
  yAxisLabel = 'Trend';
  showGridLines = true;
  innerPadding = '5%';
  animations: boolean = true;
  lineChartScheme = {
    name: 'audits stats',
    selectable: true,
    group: 'Ordinal',
    domain: ['#000000']
  };

  comboBarScheme = {
    name: 'audits score',
    selectable: true,
    group: 'Ordinal',
    domain: ['#ffcc99']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = '';

  constructor(private auditsGraphService: AuditsGraphService) {
    this.view = [innerWidth / 1.35, 350];
  }

  ngOnInit() {
    this.value = 5;
    this.isLoading = true;
    this.lineChart = [];
    this.auditsGraphService.barChartData.subscribe(data => {
      this.auditsAverageChart = data;
      this.lineChart = this.createTrendChart(this.auditsAverageChart);/* this.auditsGraphService.getAuditsLineGraphData(this.auditsAverageChart); */
      //console.log(this.lineChart);
    });

  };

  ionViewWillEnter() {
    this.auditsGraphService.getAuditsBarGraphData(0, this.value).subscribe();
  }

  onChangeHandler(event) {
    this.value = +event.target.value;
    this.auditsGraphService.getAuditsBarGraphData(0, this.value).subscribe();
  }


  onSelect(event) {
    console.log(event);
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 350];
  }

  createTrendChart(barChart: ChartData[]) {
    let lineChartTemplates = [
      {
        name: "Trend",
        series: []
      }
    ];
    let barChartData = new Array;

    for (let i = 0; i < barChart.length; i++) {
      barChartData.push([i, barChart[i].value]);
    };

    let result = regression.linear(barChartData);
    console.log(result);
    for (let i = 0; i < barChartData.length; i++) {
      lineChartTemplates[0].series.push({ 'value': result.points[i][1], 'name': barChart[i].name });
    }

    return lineChartTemplates;
  }

}
