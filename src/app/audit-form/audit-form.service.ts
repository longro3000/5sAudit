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
    departmentName: 'Warehouse',
    companyName: 'Fliq',
    auditorName: 'Lam',
    checkItemsSend: []
  };

  constructor(private http: HttpClient) { }



  getAllQuestion() {
    return this.http.get('http://10.15.10.214:8080/fliq/v3/activequestions');

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

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(this.auditForm);
    this.http.post<AuditForm>('http://10.15.10.214:8080/fliq/v3/audits', this.auditForm, { headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
