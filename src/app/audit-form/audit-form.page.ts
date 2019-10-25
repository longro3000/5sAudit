import { Component, OnInit, Input } from '@angular/core';
import { AuditFormService } from './audit-form.service';
import { AuditQuestion } from './audit-form.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.page.html',
  styleUrls: ['./audit-form.page.scss'],
})
export class AuditFormPage implements OnInit {
  private auditor = {};
  constructor(private auditFormService: AuditFormService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.auditFormService.onSubmit(this.auditor);
  }
}
