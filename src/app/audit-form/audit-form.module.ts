import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditFormPage } from './audit-form.page';
import { AuditPhaseComponent } from './audit-phase/audit-phase.component';

const routes: Routes = [
  {
    path: '',
    component: AuditFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditFormPage, AuditPhaseComponent]
})
export class AuditFormPageModule {}
