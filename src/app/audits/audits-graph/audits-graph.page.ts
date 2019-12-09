import { Component, OnInit } from '@angular/core';
import { ChartData, AuditShort } from '../audits.model';
import { AuditsGraphService } from './audits-graph.service';

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
  yAxisLabel = 'Score';
  showGridLines = true;
  innerPadding = '5%';
  animations: boolean = true;
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5', '#000000']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#3171e0']
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
      this.lineChart = this.auditsGraphService.getAuditsLineGraphData(this.auditsAverageChart);
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

}
