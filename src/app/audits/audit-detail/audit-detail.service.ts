import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuditShort, AuditDetail, CheckItem, ChartData } from '../audits.model';
import {tap} from 'rxjs/operators';

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

  getAudit = (auditId: string) => {
    return this.http.get<AuditDetail>(`https://anypoint.mulesoft.com/mocking/api/v1/links/a6af0acb-c859-4243-aa67-515363d103c0/fliq/v3/audits/${auditId}`)
            .pipe(tap(Data => {
              return Data;
            }));
 }

}
