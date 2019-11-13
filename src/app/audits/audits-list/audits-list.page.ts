import { Component, OnInit, ViewChild } from '@angular/core';
import { AuditShort } from '../audits.model';
import { AuditsService } from '../audits.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-audits-list',
  templateUrl: './audits-list.page.html',
  styleUrls: ['./audits-list.page.scss'],
})
export class AuditsListPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  counter: number = 14;
  page: number = 0;
  auditsShort: AuditShort[];
  constructor( private auditsService: AuditsService ) {}

  ngOnInit() {
    this.auditsService.auditShort.subscribe(data => {
      this.auditsShort = data;
    });
  }

  
  loadData(event) {
    setTimeout(() => {
      this.page++;
      this.auditsService.getInitialAuditsShort(this.page, 10).subscribe();
      event.target.complete();
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.auditsShort.length == 50) {
          event.target.disabled = true;
        }}, 500);
  }

  ionViewWillEnter() {
    this.auditsService.getInitialAuditsShort(this.page, 14).subscribe();
  }

}
