import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditDetailPage } from './audit-detail.page';
import { CheckItemListComponent } from './check-item-list/check-item-list.component';
import { CheckItemComponent } from './check-item-list/check-item/check-item.component';
import { MatStepperModule } from '@angular/material/stepper';

const routes: Routes = [
  {
    path: '',
    component: AuditDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatStepperModule,
  ],
  declarations: [AuditDetailPage, CheckItemListComponent, CheckItemComponent]
})
export class AuditDetailPageModule { }
