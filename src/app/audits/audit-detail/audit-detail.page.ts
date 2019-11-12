import { Component, OnInit } from '@angular/core';
import { AuditDetail } from '../audits.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditsService } from '../audits.service';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

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
    private route: ActivatedRoute,
    private auditsService: AuditsService,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('auditId')) {
        this.navCtrl.navigateBack('./audits');
        return;
      }

      this.auditId = paramMap.get('auditId');
      this.isLoading = true;
      this.auditsService.getAudit(this.auditId).subscribe(data => {
        this.loadedAudit = Object.assign(data, this.loadedAudit);
      });
      this.isLoading = false;

    });

    /*  this.auditDetailSubscription = this.activatedRoute.paramMap.subscribe(paramMap => {
       this.auditId = paramMap.get('auditId');
 
     });
     if (!this.auditId) {
       return;
     } else {
       this.auditsService.getAudit(this.auditId).subscribe(data => {
         this.loadedAudit = Object.assign(data, this.loadedAudit);
       });
     } */
  }
}
