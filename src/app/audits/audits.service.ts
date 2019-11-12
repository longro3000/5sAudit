import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem } from './audits.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private auditsShort: AuditShort[];

  private audits: AuditDetail[];

  constructor(private http: HttpClient) { }

  getAllAuditsShort() {
    return this.http.get('https://anypoint.mulesoft.com/mocking/api/v1/links/a6af0acb-c859-4243-aa67-515363d103c0/fliq/v3/shortaudits');
  }

  getAllAudits() {
  }

  getAudit = (auditId: string) => {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://anypoint.mulesoft.com/mocking/api/v1/links/a6af0acb-c859-4243-aa67-515363d103c0/fliq/v3/audits/${auditId}`);
  }
}
