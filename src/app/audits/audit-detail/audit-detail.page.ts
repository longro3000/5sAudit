import { Component, OnInit } from "@angular/core";
import { AuditDetail, AuditStat } from "../audits.model";
import { ActivatedRoute } from "@angular/router";
import { AuditDetailService } from "./audit-detail.service";

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
  constructor(
    private activatedRoute: ActivatedRoute,
    private auditDetailService: AuditDetailService
  ) { }

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
}
