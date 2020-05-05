import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { StudentDashboardComponent } from './student-dashboard.component';

import { QuizComponent } from '../quiz/quiz.component';
//import { MaterialModule } from '../shared/material/material.module';

import{ProgressComponent} from '../progress/progress.component'
import { StatModule } from '../../shared/modules';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        StudentDashboardRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        StudentDashboardComponent,
        QuizComponent,
        ProgressComponent
    ]
})
export class StudentDashboardModule {}






