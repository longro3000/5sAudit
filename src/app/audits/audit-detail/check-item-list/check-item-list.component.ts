import { Component, OnInit, Input } from '@angular/core';
import { CheckItem } from '../../audits.model';
import { AuditDetailService } from '../audit-detail.service';

@Component({
  selector: 'app-check-item-list',
  templateUrl: './check-item-list.component.html',
  styleUrls: ['./check-item-list.component.scss'],
})
export class CheckItemListComponent implements OnInit {
  @Input() checkItemList: CheckItem[];
  @Input() phase: string;
  private listByPhase: CheckItem[];
  constructor(
    private auditDetailService: AuditDetailService
  ) { }

  ngOnInit() {
    this.listByPhase = this.auditDetailService.getCheckItemByPhase(this.phase, this.checkItemList);
  }
  
}
