import { Component, OnInit } from '@angular/core';
import { ChartData, AuditShort } from '../audits.model';
import { AuditsService } from '../audits.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audits-graph',
  templateUrl: './audits-graph.page.html',
  styleUrls: ['./audits-graph.page.scss'],
})
export class AuditsGraphPage implements OnInit {
  auditsShort: AuditShort[];
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
  constructor(private auditsService: AuditsService) { }

  ngOnInit() {
    this.auditsService.auditShort.subscribe(data => {
      this.auditsShort = data;
      this.auditsAverageChart = this.auditsService.getAuditsAverageChart(this.auditsShort);
    });
  }


  onSelect(event) {
    console.log(event);
  }

}
