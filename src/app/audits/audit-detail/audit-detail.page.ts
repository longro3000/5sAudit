import { Component, OnInit } from '@angular/core';
import { AuditDetail } from '../audits.model';
import { ActivatedRoute } from '@angular/router';
import { AuditDetailService } from './audit-detail.service';

@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit-detail.page.html',
  styleUrls: ['./audit-detail.page.scss'],
})
export class AuditDetailPage implements OnInit {
  loadedAudit: AuditDetail;
  auditId: string;
  isLoading = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private auditDetailService: AuditDetailService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.auditId = paramMap.get('auditId');
      this.isLoading = true;
      this.auditDetailService.getAudit(this.auditId).subscribe(data => {
        this.loadedAudit = data;
        console.log(this.loadedAudit);
        this.isLoading = false;
      });
    });
  }
}
