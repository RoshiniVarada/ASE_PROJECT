import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  activities: any;
  exampleForm: FormGroup;
  validation_messages = {
    'URL': [
      { type: 'required', message: 'URL is required.' }
    ],
    'Title': [
     { type: 'required', message: 'Title is required.' }
   ]
  };
  userData: any;
  constructor(public firebaseService:FirebaseService,  private fb: FormBuilder,private router:Router,private sanitizer:DomSanitizer ) {}

  ngOnInit() {

    this.firebaseService.getLearnings()
    .subscribe(acts => {
      this.activities=acts;
    });
    this.createForm();




  }
  createForm() {
    this.exampleForm = this.fb.group({
      URL: ['', Validators.required ],
      Title: ['', Validators.required ]
    });
  }
  resetFields(){
    this.exampleForm = this.fb.group({
      URL: new FormControl('', Validators.required),
      Title: new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.firebaseService.createLearnings(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/faculty-layout']);
      }
    )
    value.description= "new learning module is created";
    value.title=value.Title;
    this.firebaseService.createNotifications(value);
  }
 
}
