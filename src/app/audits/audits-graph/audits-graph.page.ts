import { Component, OnInit } from '@angular/core';
import { ChartData, AuditShort } from '../audits.model';
import { AuditsGraphService } from './audits-graph.service';

@Component({
  selector: 'app-audits-graph',
  templateUrl: './audits-graph.page.html',
  styleUrls: ['./audits-graph.page.scss'],
})
export class AuditsGraphPage implements OnInit {
  auditsAverageChart: ChartData[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Average Score';
  showYAxisLabel = true;
  yAxisLabel = 'Audits';

  colorScheme = {
    domain: ['#3880FF']
  };
  constructor(private auditsGraphService: AuditsGraphService) { }

  ngOnInit() {
    this.auditsGraphService.barChartData.subscribe(data => {
      this.auditsAverageChart = data;
    })
  }

  ionViewWillEnter() {
    this.auditsGraphService.getAuditsBarGraphData(1, 10).subscribe();
 }

  onSelect(event) {
    console.log(event);
  }

}
