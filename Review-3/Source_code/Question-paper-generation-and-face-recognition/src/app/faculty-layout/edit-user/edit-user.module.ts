import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserComponent } from './edit-user.component';
import { PageHeaderModule } from './../../shared/modules';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EditUserResolver } from './edit-user.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EditUserRoutingModule, PageHeaderModule,FormsModule,ReactiveFormsModule],
    providers: [AuthService,EditUserResolver],
    declarations: [EditUserComponent]
})
export class EditUserModule {}
