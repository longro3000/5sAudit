import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'audits', pathMatch: 'full' },

  {
    path: 'audits',

    children: [

      {
        path: '',
        loadChildren: './audits/audits.module#AuditsPageModule'
      },

      {
        path: ':auditId',
        loadChildren: './audits/audit-detail/audit-detail.module#AuditDetailPageModule'
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }