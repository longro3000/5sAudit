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
    return this.http.get<AuditShort[]>(`http://ec2-13-48-203-158.eu-north-1.compute.amazonaws.com:8080/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(map(newAuditShorts => {
        newAuditShorts.map(audit => {
          this.auditsList.push(audit);
        });
        return this.auditsList;
      }), tap(audits => {
        this._auditsShort.next(audits);
      }));
    //https://anypoint.mulesoft.com/mocking/api/v1/links/e84a2be7-f46c-440b-ba8e-b80130e3bb38/fliq/v3/shortaudits
    //http://10.15.10.214:8080/fliq/v3/shortaudits
  }
}
