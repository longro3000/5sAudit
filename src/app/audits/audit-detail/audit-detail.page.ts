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
import * as _ from "lodash";

am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-audit-detail",
  templateUrl: "./audit-detail.page.html",
  styleUrls: ["./audit-detail.page.scss"]
})
export class AuditDetailPage implements OnInit {
  loadedAudit: AuditDetail;
  loadedStat: any;
  allStat: AuditStat;

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
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.auditId = paramMap.get("auditId");
      this.isLoading = true;
      this.auditDetailService.getAudit(this.auditId).subscribe(data => {
        this.loadedAudit = data;
        this.auditDetailService.getStat(this.auditId).subscribe(data => {
          this.loadedStat = data;
          this.auditDetailService.getAllStat().subscribe(data => {
            this.allStat = data;
            this.createChartData();
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
              var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
              categoryAxis.dataFields.category = "auditPhase";

              var valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
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


              var series2 = chart.series.push(new am4charts.RadarSeries());
              series2.stroke = am4core.color("blue");
              series2.fill = am4core.color("blue");
              series2.dataFields.valueY = "allStat";
              series2.dataFields.categoryX = "auditPhase";
              series2.name = "All Audits";
              series2.strokeWidth = 3;
              series2.tooltipText = "{valueY}";
              series2.bullets.create(am4charts.CircleBullet);
              //chart.cursor = new am4charts.RadarCursor();

              chart.legend = new am4charts.Legend();

              this.chart = chart;
            });
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

  createChartData() {
    _.map(this.loadedStat.phaseScores, (phase) => {
      let addedData = this.getScoreByPhase(phase.auditPhase);
      phase.allStat = addedData.score;
      return;
    })
  };

  getScoreByPhase(phase: string) {
    return _.find(this.allStat.phaseScores, (phaseScore) => {
      return phaseScore.auditPhase === phase;
    });
  };
}
