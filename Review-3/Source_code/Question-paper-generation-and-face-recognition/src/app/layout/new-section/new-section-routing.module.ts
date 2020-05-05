import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSectionComponent } from './new-section.component';

const routes: Routes = [
    {
        path: '', component: NewSectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewSectionRoutingModule {
}
