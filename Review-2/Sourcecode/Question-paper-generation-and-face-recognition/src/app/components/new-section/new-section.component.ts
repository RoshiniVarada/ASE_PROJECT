import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-section-user',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  validation_messages = {
    'no': [
      { type: 'required', message: 'Number is required.' }
    ],
    'sub': [
      { type: 'required', message: 'Subject is required.' }
    ]

  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public firebaseService: FirebaseService,
    public authService: AuthService,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      no: ['', Validators.required ],
      sub: ['', Validators.required ]

    });
  }



  resetFields(){
    this.exampleForm = this.fb.group({
      no: new FormControl('', Validators.required),
      dif: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createSection(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/display-section']);
        }
      )
  }

}
