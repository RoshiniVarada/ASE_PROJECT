import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  exampleForm: FormGroup;
  item: any;

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
  profileuser: any;

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public authService: AuthService,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.doc.data();
        this.item.id = data.payload.doc.id;
        localStorage.setItem("UserDetails",JSON.stringify(this.item));
        this.sectionDisplay();
        this.createForm();
      }
    })
  }
  sectionDisplay(){
    this.firebaseService.searchUsersSection(this.item.Section)
    .subscribe(result => {
      this.section = result;
    })
  }
  createForm() {
    this.exampleForm = this.fb.group({
      Username: [this.item.Username, Validators.required ],
      FirstName: [this.item.FirstName,  Validators.required ],
      email:[this.item.email, Validators.required],
      LastName: [this.item.LastName,  Validators.required ],     
      Address: [this.item.Address, Validators.required ],
      City:[this.item.City,Validators.required],
      Country: [this.item.Country, Validators.required ],
      PostalCode: [this.item.PostalCode,  Validators.required ],
      Role:[this.item.Role, Validators.required],
      Section: [this.item.Section,  Validators.required ],     
      Company: [this.item.Company,  Validators.required ]
    });
    console.log(this.item.id,this.exampleForm);
  }


  onSubmit(value){
    value.avatar = this.item.avatar;
    value.age = Number(value.age);
    this.firebaseService.updateUser(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/layout']);
      }
    )
  }

  delete(){
    this.firebaseService.deleteUser(this.item.id)
    .then(
      res => {
        this.router.navigate(['/layout']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel(){
    this.router.navigate(['/layout']);
  }

  emailclick(email){
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to="+email+"&su=SUBJECT&body=BODY&tf=1")
  }

}
