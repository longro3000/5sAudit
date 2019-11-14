import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef
} from "@angular/core";
import { AuditDetail, AuditStat } from "../audits.model";
import { ActivatedRoute } from "@angular/router";
import { AuditDetailService } from "./audit-detail.service";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-audit-detail",
  templateUrl: "./audit-detail.page.html",
  styleUrls: ["./audit-detail.page.scss"]
})
export class AuditDetailPage implements OnInit {
  loadedAudit: AuditDetail;
  loadedStat: AuditStat;
  sortScore: number;
  shineScore: number;
  orderScore: number;
  sustainScore: number;
  standardScore: number;
  auditId: string;
  isLoading = false;

  private chart: am4charts.RadarChart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auditDetailService: AuditDetailService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.auditId = paramMap.get("auditId");
      this.isLoading = true;
      this.auditDetailService.getAudit(this.auditId).subscribe(data => {
        this.loadedAudit = data;
        this.auditDetailService.getStat(this.auditId).subscribe(data => {
          this.loadedStat = data;
          this.sortScore = this.averageScoreByPhase("SORT");
          this.shineScore = this.averageScoreByPhase("SHINE");
          this.orderScore = this.averageScoreByPhase("ORDER");
          this.sustainScore = this.averageScoreByPhase("SUSTAIN");
          this.standardScore = this.averageScoreByPhase("STANDARDIZE");
          this.zone.runOutsideAngular(() => {
            // chart code
            let chart = am4core.create(
              document.getElementById("chartdiv"),
              am4charts.RadarChart
            );
            console.log(this.loadedStat);
            chart.data = this.loadedStat.phaseScores;

            /* Create axes */
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "auditPhase";

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(
              2
            );
            valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

            /* Create and configure series */
            var series = chart.series.push(new am4charts.RadarSeries());
            series.dataFields.valueY = "score";
            series.dataFields.categoryX = "auditPhase";
            series.name = "This Audit";
            series.strokeWidth = 3;
            series.tooltipText = "{valueY}";
            series.bullets.create(am4charts.CircleBullet);

            chart.cursor = new am4charts.RadarCursor();

            chart.legend = new am4charts.Legend();

            this.chart = chart;
          });
        });
        this.isLoading = false;
      });
    });
  }

  averageScoreByPhase(phaseName: string) {
    const findPhase = {
      ...this.loadedStat.phaseScores.filter(phase => {
        return phase.auditPhase === phaseName;
      })
    };
    return findPhase[0].score;
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
