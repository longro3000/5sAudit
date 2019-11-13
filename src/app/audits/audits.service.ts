import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem, ChartData } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { AuditDetailPage } from './audit-detail/audit-detail.page';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private barChartData: ChartData[] = [];
  private _auditsShort = new BehaviorSubject<AuditShort[]>([]);

  constructor(private http: HttpClient) { }

  get auditShort() {
    return this._auditsShort.asObservable();
  }
  fetchingData(api: string) {
    return this.http.get(api);
  }

  getInitialAuditsShort(pageNumber: number, pageSize: number) {
    return this.http.get<AuditShort[]>(`https://anypoint.mulesoft.com/mocking/api/v1/links/97b4576d-d8e1-4867-bc37-c6c0c9877aec/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(tap(newAuditShorts => {
        this._auditsShort.next(newAuditShorts);
      }));

  }


  getAuditsAverageChart(audits: AuditShort[]) {
    audits.map((audit: AuditShort) => {
        this.barChartData.push({ key: audit.key, name: audit.assessedDate, value: audit.averageScore });
    });
    return this.barChartData;
  }

}
