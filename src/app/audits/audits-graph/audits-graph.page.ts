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
    this.auditsService.getInitialAuditsShort(1, 10).subscribe(data => {
      this.auditsShort = Object.assign(data, this.auditsShort);
      console.log(this.auditsShort);
      this.auditsAverageChart = this.auditsService.getAuditsAverageChart(this.auditsShort);
    });
    

  }

  onSelect(event) {
    console.log(event);
  }

}
