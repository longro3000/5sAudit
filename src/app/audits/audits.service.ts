import { Injectable } from '@angular/core';
import Audits from './Audits-DumpData';
import { AuditShort, AuditDetail, CheckItem } from './audits.model';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private auditsShort: AuditShort[] = [
    {
      "key": "1",
      "auditorName": "Minh Nguyen Bui",
      "assessedDate": "2016-02-28"
    },
    {
      "key": "2",
      "auditorName": "Chanh Lam Nguyen",
      "assessedDate": "2016-02-28"
    },
    {
      "key": "3",
      "auditorName": "Long Vu Pham",
      "assessedDate": "2016-02-28"
    },
    {
      "key": "4",
      "auditorName": "Tuan Hiep Duong",
      "assessedDate": "2016-02-28"
    }
  ];

  private audits: AuditDetail[] = Audits;

  constructor() { }

  getAllAuditsShort() {
    return [...this.auditsShort];
  }

  getAllAudits() {
    
  }

  getAudit(auditId: string) {
    return {...this.audits.find(audit => {
      return audit.key === auditId;
    })};
  }
}
