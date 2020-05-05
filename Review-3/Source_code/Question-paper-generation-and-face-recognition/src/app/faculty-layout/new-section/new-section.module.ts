import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewSectionRoutingModule } from './new-section-routing.module';
import { NewSectionComponent } from './new-section.component';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    imports: [CommonModule, NewSectionRoutingModule, PageHeaderModule,FormsModule,ReactiveFormsModule],
    declarations: [NewSectionComponent]
})
export class NewSectionModule {}
