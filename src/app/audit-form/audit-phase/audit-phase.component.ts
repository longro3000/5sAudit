import { Component, OnInit, Input } from '@angular/core';
import { AuditQuestion } from '../audit-form.model';
import { AuditFormService } from '../audit-form.service';


@Component({
  selector: 'app-audit-phase',
  templateUrl: './audit-phase.component.html',
  styleUrls: ['./audit-phase.component.scss'],
})
export class AuditPhaseComponent implements OnInit {
  @Input() auditQuestions: AuditQuestion[];
  @Input() auditQuestionsSORT: AuditQuestion[];
  @Input() auditQuestionsORDER: AuditQuestion[];
  @Input() auditQuestionsSUSTAIN: AuditQuestion[];
  @Input() auditQuestionsSHINE: AuditQuestion[];
  @Input() auditQuestionsSTANDARDIZE: AuditQuestion[];
  constructor(private auditFormService: AuditFormService) { }

  ngOnInit() {
      this.auditFormService.getAllQuestion().subscribe(data => {

      this.auditQuestions = Object.assign(data, this.auditQuestions);

      this.auditQuestionsSORT = this.auditFormService.getAuditQuestionbyPhaseName('SORT', this.auditQuestions);

      this.auditQuestionsSHINE = this.auditFormService.getAuditQuestionbyPhaseName('SHINE', this.auditQuestions);

      this.auditQuestionsORDER = this.auditFormService.getAuditQuestionbyPhaseName('ORDER', this.auditQuestions);

      this.auditQuestionsSUSTAIN = this.auditFormService.getAuditQuestionbyPhaseName('SUSTAIN', this.auditQuestions);

      this.auditQuestionsSTANDARDIZE = this.auditFormService.getAuditQuestionbyPhaseName('STANDARDIZE', this.auditQuestions);
    });

  }

}
