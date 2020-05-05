import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSectionRoutingModule } from './edit-section-routing.module';
import { EditSectionComponent } from './edit-section.component';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    imports: [CommonModule, EditSectionRoutingModule, PageHeaderModule],
    declarations: [EditSectionComponent]
})
export class EditSectionModule {}
