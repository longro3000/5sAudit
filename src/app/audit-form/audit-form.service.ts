import { Injectable, IterableDiffers } from '@angular/core';
import AuditQuestionList from './Questions-dumbData';
import { AuditQuestion } from '../audit-form/audit-form.model';


@Injectable({
  providedIn: 'root'
})
export class AuditFormService {
  private auditQuestions: AuditQuestion[] = AuditQuestionList;

  constructor() { }

  getAllQuestion() {
    return [...this.auditQuestions];
  }

  getAllPhaseNames() {
    return [...new Set(this.auditQuestions.map(auditQuestion => auditQuestion.auditPhase))];
  }

  getAuditQuestionbyPhaseName(phaseName: string, auditQuestionList: AuditQuestion[]) {
    return [...auditQuestionList.filter(auditQuestion => {
      return auditQuestion.auditPhase === phaseName;
    })];
  }
}
