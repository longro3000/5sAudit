import { Component, OnInit } from '@angular/core';
import { AuditShort } from '../audits.model';
import { AuditsService } from '../audits.service';

@Component({
  selector: 'app-audits-list',
  templateUrl: './audits-list.page.html',
  styleUrls: ['./audits-list.page.scss'],
})
export class AuditsListPage implements OnInit {

  auditsShort: AuditShort[];
  constructor( private auditsService: AuditsService ) {}

  ngOnInit() {
    this.auditsService.getInitialAuditsShort(1, 10).subscribe(data => {
      this.auditsShort = Object.assign(data, this.auditsShort);
      console.log(this.auditsShort);
    });
  }

}
