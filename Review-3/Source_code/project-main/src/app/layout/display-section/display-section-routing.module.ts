import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplaySectionComponent } from './display-section.component';

const routes: Routes = [
    {
        path: '', component: DisplaySectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisplaySectionRoutingModule {
}
