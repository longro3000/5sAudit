import { Component, OnInit, Input } from '@angular/core';
import { AuditShort } from '../audits.model';

@Component({
  selector: 'app-audit-item',
  templateUrl: './audit-item.component.html',
  styleUrls: ['./audit-item.component.scss'],
})
export class AuditItemComponent implements OnInit {
  @Input() auditShortItem: AuditShort;
  constructor() { }

  ngOnInit() {
  }

}
