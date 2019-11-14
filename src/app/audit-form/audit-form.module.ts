import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditFormPage } from './audit-form.page';
import { AuditPhaseComponent } from './audit-phase/audit-phase.component';
import { AuditQuestionComponent } from './audit-phase/audit-question/audit-question.component';
import { MatStepperModule } from '@angular/material/stepper';

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
    RouterModule.forChild(routes),
    MatStepperModule
  ],
  declarations: [AuditFormPage, AuditPhaseComponent, AuditQuestionComponent]
})
export class AuditFormPageModule { }
