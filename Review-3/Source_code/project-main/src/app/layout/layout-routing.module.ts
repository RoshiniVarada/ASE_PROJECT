import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { AuthService } from '../shared/services/auth.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
           
            { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'layout/dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'layout/charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'layout/tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
           { path: 'layout/student-dashboard', loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule) },
           { path: 'layout/new-user', loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule) },
          { path: 'layout/edit-user', loadChildren: () => import('./edit-user/edit-user.module').then(m => m.EditUserModule), resolve:{data : EditUserResolver}},
        //   { path: 'layout/edit-section', loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule),resolve:{data : EditSectionResolver} },
           { path: 'layout/new-section', loadChildren: () => import('./new-section/new-section.module').then(m => m.NewSectionModule) },
           { path: 'layout/display-section', loadChildren: () => import('./display-section/display-section.module').then(m =>m.DisplaySectionModule) },
           { path: 'layout/list-details', loadChildren: () => import('./list-details/list-details.module').then(m => m.ListDetailsModule) },
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [AuthService,EditUserResolver],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
