import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuditShort, AuditDetail, CheckItem, ChartData, AuditStat } from '../audits.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditDetailService {

  constructor(private http: HttpClient) { }

  getCheckItemByPhase(phase: string, checkItemList: CheckItem[]) {
    return [...checkItemList.filter(checkItem => {
      return checkItem.auditPhase === phase;
    })];
  }

  getStat = (auditId: string) => {
    return this.http.get<AuditStat>(`https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/stat/stat/${auditId}`)
      .pipe(tap(data => {
        return data;
      }));
    //https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/stat/stat/
    //http://192.168.100.10:8080/fliq/v3/stat/
  }
  getAudit = (auditId: string) => {
    return this.http.get<AuditDetail>(`https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/audits/${auditId}`)
      .pipe(tap(Data => {
        return Data;
      }));

    //https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/audits/
    //http://192.168.100.10:8080/fliq/v3/audits/
  }

}
