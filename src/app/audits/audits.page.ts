import { Component, OnInit } from '@angular/core';
import { AuditsService } from './audits.service';
import { AuditShort } from './audits.model';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.page.html'
})
export class AuditsPage implements OnInit {
  constructor( private auditsService: AuditsService ) {}

  ngOnInit() {
  }
}
