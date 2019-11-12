import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem, ChartData } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { AuditDetailPage } from './audit-detail/audit-detail.page';
import { Observable, BehaviorSubject } from 'rxjs';
import _ from 'lodash';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private barChartData: ChartData[];
  private _auditsShort = new BehaviorSubject<AuditShort[]>([]);
  
  constructor(private http: HttpClient) { }

  get auditShort() {
    return this._auditsShort.asObservable();
  }
  fetchingData(api: string) {
    return this.http.get(api);
  }

  getInitialAuditsShort(pageNumber: number, pageSize: number) {
    return this.http.get<AuditShort[]>(`https://anypoint.mulesoft.com/mocking/api/v1/links/a6af0acb-c859-4243-aa67-515363d103c0/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(tap(newAuditShorts => {
        this._auditsShort.next(newAuditShorts);
      }));

  }


  getAuditsAverageChart(audits: AuditShort[]) {
    _.map(audits, (audit: AuditShort) => {
      return [...this.barChartData, { key: audit.key, name: audit.assessedDate, value: audit.averageScore}];
    });

    return this.barChartData;
  }

}
