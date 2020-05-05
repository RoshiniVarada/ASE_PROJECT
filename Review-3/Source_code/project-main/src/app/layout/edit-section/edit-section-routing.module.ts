import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSectionComponent } from './edit-section.component';

const routes: Routes = [
    {
        path: '', component: EditSectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditSectionRoutingModule {
}
