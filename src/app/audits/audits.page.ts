import { Component, OnInit } from '@angular/core';
import { AuditsService } from './audits.service';
import { AuditShort } from './audits.model';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.page.html',
  styleUrls: ['./audits.page.scss'],
})
export class AuditsPage implements OnInit {
  auditsShort: AuditShort[];
  constructor( private auditsService: AuditsService ) {}

  ngOnInit() {
    this.auditsShort = this.auditsService.getAllAuditsShort();
  }
}
