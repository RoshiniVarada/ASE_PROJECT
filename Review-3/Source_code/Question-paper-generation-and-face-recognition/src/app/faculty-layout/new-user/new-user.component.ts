import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
//import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  validation_messages = {
   'Username': [
     { type: 'required', message: 'Username is required.' }
   ],
   'email': [
    { type: 'required', message: 'Email is required.' }
  ],
  'FirstName': [
    { type: 'required', message: 'FirstName is required.' }
  ],
  'LastName': [
    { type: 'required', message: 'LastName is required.' }
  ],
   'Address': [
     { type: 'required', message: 'Address is required.' },
   ],
   'City': [
     { type: 'required', message: 'City is required.' },
   ],
   'Country':[
     {type: 'required',message:'Country is required'}
   ],
   'PostalCode':[
    {type: 'required',message:'PostalCode is required'}
  ],
  'Role':[
    {type: 'required',message:'Role is required'}
  ],
  'Section':[
    {type: 'required',message:'Section is required'}
  ],
  'Company':[
    {type: 'required',message:'Company is required'}
  ]
 };
  section: any;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService,
    public authService: AuthService,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.createForm();
    this.sectionDisplay();
  }

  sectionDisplay(){
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.section = result;
      console.log(result)
    })
  }

  createForm() {
    this.exampleForm = this.fb.group({
      Username: ['', Validators.required ],
      FirstName: ['', Validators.required ],
      email:['',Validators.required],
      LastName: ['', Validators.required ],     
      Address: ['', Validators.required ],
      City:['',Validators.required],
      Country: ['', Validators.required ],
      PostalCode: ['', Validators.required ],
      Role:['',Validators.required],
      Section: ['', Validators.required ],     
      Company: ['', Validators.required ]
    });
  }

  /* openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  } */

  resetFields(){
    this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/faculty-layout']);
      }
    )
  }

}
