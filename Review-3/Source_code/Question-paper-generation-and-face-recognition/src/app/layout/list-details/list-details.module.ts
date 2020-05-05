import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDetailsRoutingModule } from './list-details-routing.module';
import { ListDetailsComponent } from './list-details.component';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    imports: [CommonModule, ListDetailsRoutingModule, PageHeaderModule],
    declarations: [ListDetailsComponent]
})
export class ListDetailsModule {}
