import { Injectable } from '@angular/core';
import { AuditShort, AuditDetail, CheckItem, ChartData } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private _auditsShort = new BehaviorSubject<AuditShort[]>([]);
  private auditsList: AuditShort[] = [];
  constructor(private http: HttpClient) { }

  get auditShort() {
    return this._auditsShort.asObservable();
  }

  getInitialAuditsShort(pageNumber: number, pageSize: number) {
    return this.http.get<AuditShort[]>(`http://10.15.10.214:8080/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(map(newAuditShorts => {
          newAuditShorts.map(audit => {
            this.auditsList.push(audit);
          });
          return this.auditsList;
      }),tap(audits => {
        this._auditsShort.next(audits);
      }));
      //https://anypoint.mulesoft.com/mocking/api/v1/links/97b4576d-d8e1-4867-bc37-c6c0c9877aec/fliq/v3/shortaudits
      //http://192.168.0.20:8080/fliq/v3/shortaudits
  }
}
