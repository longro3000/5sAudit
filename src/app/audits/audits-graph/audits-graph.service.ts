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
    return this.http.get<AuditShort[]>(`https://anypoint.mulesoft.com/mocking/api/v1/links/97b4576d-d8e1-4867-bc37-c6c0c9877aec/fliq/v3/shortaudits?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .pipe(map(newAuditShorts => {
        let newData = [];
        newAuditShorts.map((audit) => {
          newData.push({ key: audit.key, name: audit.assessedDate, value: audit.averageScore });
        })
        return newData;
      }), tap(newData => {
        this._barChartData.next(newData);
      }));
    //https://anypoint.mulesoft.com/mocking/api/v1/links/97b4576d-d8e1-4867-bc37-c6c0c9877aec/fliq/v3/shortaudits
    //http://192.168.0.20:8080/fliq/v3/shortaudits
  }
}
