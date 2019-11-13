import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuditsPage } from './audits/audits.page';


const routes: Routes = [
  { path: '', redirectTo: 'workspace', pathMatch: 'full' },

  {
    path: 'audits',
    component: AuditsPage,
    children: [
          {
            path: 'List',
            loadChildren: './audits/audits-list/audits-list.module#AuditsListPageModule'
          },
          {
            path: 'Graph',
            loadChildren: './audits/audits-graph/audits-graph.module#AuditsGraphPageModule'
          },
          {
            path: '',
            redirectTo: '/audits/List',
            pathMatch: 'full'
          }
    ],
  },
  {
    path: 'audits/List/:auditId',
    loadChildren: './audits/audit-detail/audit-detail.module#AuditDetailPageModule'
  },   
  { path: 'workspace', loadChildren: './workspace/workspace.module#WorkspacePageModule' },
  { path: 'audit-form', loadChildren: './audit-form/audit-form.module#AuditFormPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
