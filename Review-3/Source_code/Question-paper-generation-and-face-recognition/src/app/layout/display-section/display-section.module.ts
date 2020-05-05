import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplaySectionRoutingModule } from './display-section-routing.module';
import { DisplaySectionComponent } from './display-section.component';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    imports: [CommonModule, DisplaySectionRoutingModule, PageHeaderModule],
    declarations: [DisplaySectionComponent]
})
export class DisplaySectionModule {}
