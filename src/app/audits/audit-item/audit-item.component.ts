import { Component, OnInit, Input } from '@angular/core';
import { AuditShort } from '../audits.model';

@Component({
  selector: 'app-audit-item',
  templateUrl: './audit-item.component.html',
  styleUrls: ['./audit-item.component.scss'],
})
export class AuditItemComponent implements OnInit {
  @Input() auditShortItem: AuditShort;
  color: string;
  isLoading: boolean;

  constructor() {

  }

  ngOnInit() {
   /*  this.isLoading = true;
    this.auditShortItem.assessedDate = Date.parse(this.auditShortItem.assessedDate).toString();
    Number(this.auditShortItem.assessedDate);

    console.log(typeof (this.auditShortItem.assessedDate));
    console.log(Date.parse(this.auditShortItem.assessedDate).toString()); */

    if (this.auditShortItem.averageScore >= 3) {
      this.color = "success";
    } else if (this.auditShortItem.averageScore >= 2) this.color = "warning";
    else this.color = "danger";
    
    this.isLoading = false;
  }

}
