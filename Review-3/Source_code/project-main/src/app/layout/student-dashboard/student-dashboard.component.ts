
import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Router, Params } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { QuizComponent } from'../quiz/quiz.component';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  assignments=false;
  assgnSub: any;

  constructor(    public firebaseService: FirebaseService,
    private router: Router,
    public authService: AuthService,
    public ngZone: NgZone) { }

  ngOnInit(): void {

   const assign= localStorage.getItem("assgn");
   if(assign==null || assign==undefined){
    this.assignments=true;
   }
     if(this.assignments==true){
      this.firebaseService.getAllAssignments()
      .subscribe(result => {
        this.assgnSub = result;
      })
    }
  }
  taketest(assgn){
    const assgnmwnt=JSON.stringify(assgn.payload.doc.data());
    localStorage.setItem("assgn",assgnmwnt);
    this.assignments=false;
      
   }
  goToNewUser(){
    this.router.navigate(['/new-user']);
  }
  goToNewSection(){
    this.router.navigate(['/new-section']);
  }
}
