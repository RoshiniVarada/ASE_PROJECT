import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


//import { MaterialModule } from '../shared/material/material.module';
import { SocketService } from '../dashboard/components/chat/shared/services/socket.service';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
    TodolistComponent

} from './components';
import { StatModule } from '../../shared/modules';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        TodolistComponent
    ],
    providers: [SocketService]
})
export class DashboardModule {}






