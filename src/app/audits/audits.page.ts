import { Component, OnInit } from '@angular/core';
import { AuditsService } from './audits.service';
import { AuditShort } from './audits.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.page.html',
  styleUrls: ['./audits.page.scss'],
})
export class AuditsPage implements OnInit {
  private auditShortSubscription: Subscription;
  auditsShort: AuditShort[];
  constructor(private auditsService: AuditsService) { }

  ngOnInit() {
    this.auditShortSubscription = this.auditsService.getAllAuditsShort().subscribe(data => {
      this.auditsShort = Object.assign(data, this.auditsShort);
    });
  }
}
