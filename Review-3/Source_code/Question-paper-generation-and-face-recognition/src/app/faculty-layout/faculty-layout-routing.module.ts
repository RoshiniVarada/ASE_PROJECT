import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyLayoutComponent } from './faculty-layout.component';
import { EditUserResolver } from '../layout/edit-user/edit-user.resolver';
import { AuthService } from '../shared/services/auth.service';
import { EditSectionResolver } from '../layout/edit-section/edit-section.resolver';

const routes: Routes = [
    {
        path: '',
        component: FacultyLayoutComponent,
        children: [
           
            { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'layout/dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'layout/charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'layout/tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
           { path: 'layout/new-user', loadChildren: () => import('./new-user/new-user.module').then(m => m.NewUserModule) },
          { path: 'layout/edit-user', loadChildren: () => import('./edit-user/edit-user.module').then(m => m.EditUserModule), resolve:{data : EditUserResolver}},
        { path: 'layout/edit-section', loadChildren: () => import('./edit-section/edit-section.module').then(m => m.EditSectionModule),resolve:{data : EditSectionResolver} },
           { path: 'layout/new-section', loadChildren: () => import('./new-section/new-section.module').then(m => m.NewSectionModule) }
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [AuthService,EditUserResolver],
    exports: [RouterModule]
})
export class FacultyLayoutRoutingModule {}
