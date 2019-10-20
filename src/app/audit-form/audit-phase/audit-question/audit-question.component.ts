import { Component, OnInit, Input, Output } from '@angular/core';
import { AuditQuestion } from '../../audit-form.model';
import { AuditFormService } from '../../audit-form.service';

@Component({
  selector: 'app-audit-question',
  templateUrl: './audit-question.component.html',
  styleUrls: ['./audit-question.component.scss'],
})
export class AuditQuestionComponent implements OnInit {
  @Input() auditQuestionItem: AuditQuestion;
  constructor(private auditFormService: AuditFormService) { }

  ngOnInit() {
  }

}
