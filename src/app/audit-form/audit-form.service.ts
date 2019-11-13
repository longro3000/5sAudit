import { Injectable, IterableDiffers } from '@angular/core';
import { AuditQuestion, AuditForm, AuditAnswer } from '../audit-form/audit-form.model';
import * as _ from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuditFormService {
  private auditQuestions: AuditQuestion[];
  private auditAnswer: AuditAnswer;
  private auditForm: AuditForm = {
    departmentName: 'Research and Development',
    companyName: 'Fliq',
    auditorName: 'Lam',
    checkItemsSend: []
  };

  constructor(private http: HttpClient) { }



  getAllQuestion() {
    return this.http.get('https://anypoint.mulesoft.com/mocking/api/v1/links/a6af0acb-c859-4243-aa67-515363d103c0/fliq/v3/activequestions');

  }

  getAllPhaseNames() {
  
  }

  getAuditQuestionbyPhaseName(phaseName: string, auditQuestionList: AuditQuestion[]) {
    return [...auditQuestionList.filter(auditQuestion => {
      return auditQuestion.auditPhase === phaseName;
    })];
  }

  appendNewCheckItem(questionID: number, checkItemAnswer: number) {
    this.auditAnswer = {
      questionID,
      checkItemAnswer
    };

    if (_.findIndex(this.auditForm.checkItemsSend, { questionID }) === -1) {
      this.auditForm.checkItemsSend.push(this.auditAnswer);
    } else {
      _.remove(this.auditForm.checkItemsSend, (n) => {
        return n.questionID === this.auditAnswer.questionID;
      });
      this.auditForm.checkItemsSend.push(this.auditAnswer);
    }
  }

  onSubmit(auditor: any) {

    this.auditForm.auditorName = auditor.auditorName;
    this.auditForm.departmentName = auditor.departmentName;
    this.auditForm.companyName = auditor.companyName;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://anypoint.mulesoft.com/mocking/api/v1/links/2db068de-a466-426c-b3ad-7d6d433c4cf1/fliq/v3/audits', this.auditForm, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
