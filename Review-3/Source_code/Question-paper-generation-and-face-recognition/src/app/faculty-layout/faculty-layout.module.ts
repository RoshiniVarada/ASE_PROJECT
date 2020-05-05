import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
import { FacultyLayoutRoutingModule } from './faculty-layout-routing.module';
import { FacultyLayoutComponent } from './faculty-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from "src/app/shared/services/auth.service";
//Material
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
     MatInputModule, MatSliderModule, MatDialogModule
  } from "@angular/material";


  const MAT_MODULES  = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule, MatSliderModule, MatDialogModule
  ];

  

@NgModule({
    imports: [
        CommonModule,
        FacultyLayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        FormsModule,
        ReactiveFormsModule,
        MAT_MODULES
    ],
    exports: [MAT_MODULES],
    providers: [AuthService],
    declarations: [FacultyLayoutComponent, SidebarComponent, HeaderComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class FacultyLayoutModule {}
