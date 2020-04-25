
import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Router, Params } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { QuizComponent } from'../quiz/quiz.component';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(    public firebaseService: FirebaseService,
    private router: Router,
    public authService: AuthService,
    public ngZone: NgZone) { }

  ngOnInit(): void {
  }
  goToUserProfile(){
    this.router.navigate(['/list-details']);
  }
  goToNewUser(){
    this.router.navigate(['/new-user']);
  }
  goToNewSection(){
    this.router.navigate(['/new-section']);
  }
}
