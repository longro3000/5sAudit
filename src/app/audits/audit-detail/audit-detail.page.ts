import { Component, OnInit } from '@angular/core';
import { AuditDetail } from '../audits.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditsService } from '../audits.service';

@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit-detail.page.html',
  styleUrls: ['./audit-detail.page.scss'],
})
export class AuditDetailPage implements OnInit {
  loadedAudit: AuditDetail;
  auditId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private auditsService: AuditsService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.auditId = paramMap.get('auditId');
    });

    this.auditsService.getAudit(this.auditId).subscribe(data => {
      this.loadedAudit = Object.assign(data, this.loadedAudit);
    });
  }
}
