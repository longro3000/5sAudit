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
    return this.http.get('http://10.15.10.67:8080/fliq/v3/activequestions');

    // return [...this.auditQuestions];
  }

  getAllPhaseNames() {
    // return [...new Set(this.auditQuestions.map(auditQuestion => auditQuestion.auditPhase))];
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
    console.log(this.auditAnswer);

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

    this.http.post('http://10.15.10.67:8080/fliq/v3/audits', this.auditForm, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
