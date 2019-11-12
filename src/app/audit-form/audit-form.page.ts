import { Component, OnInit, Input } from '@angular/core';
import { AuditFormService } from './audit-form.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.page.html',
  styleUrls: ['./audit-form.page.scss'],
})
export class AuditFormPage implements OnInit {
  private auditor = {};
  constructor(private auditFormService: AuditFormService, private router: Router) { }

  ngOnInit() {

  }
  onSubmit() {
    this.auditFormService.onSubmit(this.auditor);
    this.router.navigate(['./audits'])
      .then(() => {
        window.location.reload();
      });
  }
}
