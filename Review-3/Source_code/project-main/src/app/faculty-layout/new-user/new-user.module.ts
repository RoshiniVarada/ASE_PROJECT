import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';
import { PageHeaderModule } from './../../shared/modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, NewUserRoutingModule, PageHeaderModule,FormsModule,ReactiveFormsModule],
    declarations: [NewUserComponent]
})
export class NewUserModule {}
