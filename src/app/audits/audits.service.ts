import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { AuditDetailPage } from './audit-detail/audit-detail.page';


@Injectable({
  providedIn: 'root'
})
export class AuditsService {

  constructor(private http: HttpClient) { }

  getInitialAuditsShort(pageNumber: number, pageSize: number) {
    return this.http.get(`https://anypoint.mulesoft.com/mocking/api/v1/links/a6af0acb-c859-4243-aa67-515363d103c0/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`);

  }

  getAudit = (auditId: string) => {
     return this.http.get(`http://10.15.10.67:8080/fliq/v3/audits/${auditId}`);
  }
}
