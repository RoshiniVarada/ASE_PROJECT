import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';
import { EditUserComponent } from 'src/app/components/edit-user/edit-user.component';
import { EditUserResolver } from 'src/app/components/edit-user/edit-user.resolver';
import { ListDetailsComponent } from 'src/app/components/list-details/list-details.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  {path:'list-details',component:ListDetailsComponent},
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }