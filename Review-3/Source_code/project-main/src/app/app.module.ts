import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
// Reactive Form
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';
// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './components/home/home.component';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
// Auth service
import { AuthService } from "./shared/services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
   MatInputModule, MatSliderModule, MatDialogModule
} from "@angular/material";
//import { EditUserResolver } from './components/edit-user/edit-user.resolver';

import { ErrorComponent } from './components/error/error.component';
import { NonuserComponent } from './components/nonuser/nonuser.component';

const MAT_MODULES  = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatInputModule, MatSliderModule, MatDialogModule
];


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,

    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    ErrorComponent,
    NonuserComponent

  ],
  imports: [
        CommonModule,
        BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
        LanguageTranslationModule,
    FormsModule,
    DragDropModule,
        HttpClientModule,
  MAT_MODULES
  ],
  exports: [MAT_MODULES],
  providers: [AuthService],
  bootstrap: [AppComponent]

})

export class AppModule { }
