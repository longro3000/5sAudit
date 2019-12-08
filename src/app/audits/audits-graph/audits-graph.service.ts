import { Injectable } from '@angular/core';
import { ChartData, AuditShort } from '../audits.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditsGraphService {
  private _barChartData = new BehaviorSubject<ChartData[]>([]);

  constructor(private http: HttpClient) { }

  get barChartData() {
    return this._barChartData.asObservable();
  }

  getAuditsBarGraphData(pageNumber: number, pageSize: number) {
    return this.http.get<AuditShort[]>(`https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(map(newAuditShorts => {
        let newData = [];
        newAuditShorts.map((audit) => {
          newData.push({ key: audit.key, name: audit.assessedDate, value: audit.averageScore });
        })
        return newData;
      }), tap(newData => {
        this._barChartData.next(newData);
      }));
    //https://anypoint.mulesoft.com/mocking/api/v1/links/bccaf32c-b657-46ab-aef6-11acd461a9c0/fliq/v3/shortaudits
    //http://192.168.100.10:8080/fliq/v3/shortaudits
  }
}
