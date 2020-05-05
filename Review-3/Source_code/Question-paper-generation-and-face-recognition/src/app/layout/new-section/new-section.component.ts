import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-section-user',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {

  values: any;
modules=true;
assignments=false;
showcomp=false;
  valuesnew: any;
  modulesSub: any;
  user: any;
  assgnSub: any;
  grades: boolean;
  learnings: boolean;
  constructor(
    public firebaseService: FirebaseService,
    public _Activatedroute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.values = localStorage.getItem("subdetails");
      this.valuesnew =JSON.parse(this.values);
      this.firebaseService.getModules(this.valuesnew.name)
      .subscribe(result => {
        this.modulesSub = result;
        this.showcomp=true;
      })
   
     

      
  }

 taketest(assgn){
  const assgnmwnt=JSON.stringify(assgn.payload.doc.data());
  localStorage.setItem("assgn",assgnmwnt);
  this.router.navigate(['layout/layout/student-dashboard']);
    
 }
  public showfn(value){
    if(value=="modules"){
      this.modules=true;
      this.assignments=false;
      this.grades=false;
      this.learnings=false;
    }else if(value=="assignments"){
      this.assignments=true;
      this.modules=false;
      this.grades=false;
      this.learnings=false;
    }else if(value=="learnings"){
      this.assignments=false;
      this.modules=false;
      this.grades=false;
      this.learnings=true;
    }else if(value=="grades"){
      this.assignments=true;
      this.modules=false;
      this.grades=true;
      this.learnings=false;
    }else{
      this.modules=true;
      this.modules=false;
      this.grades=false;
      this.learnings=false;
    }
    if(this.modules==true){
      this.firebaseService.getModules(this.valuesnew.name)
      .subscribe(result => {
        this.modulesSub = result;
      })
    }else if(this.learnings==true){
      this.router.navigate(['/layout']);
     }else if(this.grades==true){
      this.router.navigate(['/layout/layout/charts']);
     }else if(this.assignments==true){
      this.user=JSON.parse(localStorage.getItem("UserDetails"));
      this.valuesnew.sec=this.user.Section;
       this.firebaseService.getAssignments(this.valuesnew)
       .subscribe(result => {
         this.assgnSub = result;
       })
     }

  }






}
