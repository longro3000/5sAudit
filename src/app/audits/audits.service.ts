import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { AuditDetailPage } from './audit-detail/audit-detail.page';


@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private auditsShort: AuditShort[];

  private audits: AuditDetail[];

  constructor(private http: HttpClient) { }

  getAllAuditsShort() {
    return this.http.get('http://192.168.1.44:8080/fliq/v3/shortaudits');
  }

  getAllAudits() {
  }

  getAudit = (auditId: string) => {
     return this.http.get(`http://192.168.1.44:8080/fliq/v3/audits/${auditId}`);
  }
}
