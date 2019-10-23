import { Component, OnInit, Input } from '@angular/core';
import { AuditFormService } from './audit-form.service';
import { AuditQuestion } from './audit-form.model';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.page.html',
  styleUrls: ['./audit-form.page.scss'],
})
export class AuditFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
