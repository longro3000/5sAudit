import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditsPage } from './audits.page';
import { AuditItemComponent } from './audit-item/audit-item.component';

const routes: Routes = [
  {
    path: '',
    component: AuditsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditsPage, AuditItemComponent]
})
export class AuditsPageModule {}
