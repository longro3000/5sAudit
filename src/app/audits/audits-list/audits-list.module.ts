import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditsListPage } from './audits-list.page';
import { AuditItemComponent } from '../audit-item/audit-item.component';

const routes: Routes = [
  {
    path: '',
    component: AuditsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditsListPage, AuditItemComponent]
})
export class AuditsListPageModule {}
