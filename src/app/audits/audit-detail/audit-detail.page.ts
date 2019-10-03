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
  constructor(
    private activatedRoute: ActivatedRoute,
    private auditsService: AuditsService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('auditId')) {
          this.router.navigate(['./audits']);
          return;
      }
      const auditId = paramMap.get('auditId');
      this.loadedAudit = this.auditsService.getAudit(auditId);
      console.log(this.loadedAudit);
    })
  }

}
