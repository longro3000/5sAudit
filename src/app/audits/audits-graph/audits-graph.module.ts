import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditsGraphPage } from './audits-graph.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ComboChartComponent, ComboSeriesVerticalComponent } from '../../combo-chart';

const routes: Routes = [
  {
    path: '',
    component: AuditsGraphPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditsGraphPage, ComboChartComponent, ComboSeriesVerticalComponent]
})
export class AuditsGraphPageModule {}
