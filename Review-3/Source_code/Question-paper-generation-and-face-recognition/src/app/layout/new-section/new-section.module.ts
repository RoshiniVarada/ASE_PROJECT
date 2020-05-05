import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSectionRoutingModule } from './new-section-routing.module';
import { NewSectionComponent } from './new-section.component';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    imports: [CommonModule, NewSectionRoutingModule, PageHeaderModule],
    declarations: [NewSectionComponent]
})
export class NewSectionModule {}
