import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem, ChartData } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { AuditDetailPage } from './audit-detail/audit-detail.page';
import { Observable, BehaviorSubject } from 'rxjs';
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

  getInitialAuditsShort(pageNumber: number, pageSize: number) {
    return this.http.get<AuditShort[]>(`https://anypoint.mulesoft.com/mocking/api/v1/links/97b4576d-d8e1-4867-bc37-c6c0c9877aec/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(tap(newAuditShorts => {
        this._auditsShort.next(newAuditShorts);
      }));
      //https://anypoint.mulesoft.com/mocking/api/v1/links/97b4576d-d8e1-4867-bc37-c6c0c9877aec/fliq/v3/shortaudits
      //http://192.168.0.20:8080/fliq/v3/shortaudits
  }
}
