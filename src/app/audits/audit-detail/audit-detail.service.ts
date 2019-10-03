import { Injectable } from '@angular/core';
import { CheckItem } from '../audits.model';

@Injectable({
  providedIn: 'root'
})
export class AuditDetailService {

  constructor() { }

  getCheckItemByPhase(phase: string, checkItemList: CheckItem[]) {
      return [...checkItemList.filter(checkItem => {
          return checkItem.auditPhase === phase;
      })];
  }
}
