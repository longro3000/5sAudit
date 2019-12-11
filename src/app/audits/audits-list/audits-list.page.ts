import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuditShort } from '../audits.model';
import { AuditsService } from '../audits.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-audits-list',
  templateUrl: './audits-list.page.html',
  styleUrls: ['./audits-list.page.scss'],
})
export class AuditsListPage implements OnInit, OnDestroy {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  counter: number = 14;
  page: number = 0;
  auditsShort: AuditShort[];
  auditShort: AuditShort;
  isLoading: boolean;
  dataSubcription: Subscription;

  constructor(private auditsService: AuditsService) { }

  ngOnInit() {

    this.dataSubcription = this.auditsService.auditShort.subscribe(data => {
      this.auditsShort = data;
      console.log(this.auditsShort);

      for (this.auditShort of this.auditsShort) {
        console.log(this.auditShort);
        this.auditShort.assessedDate = Date.parse(this.auditShort.assessedDate).toString();
        Number(this.auditShort.assessedDate);
      }
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
      }
    }, 500);
  }

  ionViewWillEnter() {
    this.auditsService.getInitialAuditsShort(this.page, 14).subscribe();
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.dataSubcription.unsubscribe();
  }

}
