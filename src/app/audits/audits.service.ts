import { Injectable } from '@angular/core';
import { AuditShort } from './audits.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
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
    return this.http.get<AuditShort[]>(`https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(map(newAuditShorts => {
        newAuditShorts.map(audit => {
          this.auditsList.push(audit);
        });
        return this.auditsList;
      }), tap(audits => {
        this._auditsShort.next(audits);
      }));
    //https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/shortaudits
    //http://192.168.100.10:8080/fliq/v3/shortaudits
  }
}
