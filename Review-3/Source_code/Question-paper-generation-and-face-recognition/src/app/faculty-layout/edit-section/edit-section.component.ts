import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {

  exampleForm: FormGroup;
  item: any;

  validation_messages = {
    'no': [
      { type: 'required', message: 'Number is required.' }
    ],
    'sub': [
      { type: 'required', message: 'Subject is required.' }
    ]
  };

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
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

  createForm() {
    this.exampleForm = this.fb.group({
      no: [this.item.no, Validators.required],
      sub: [this.item.sub, Validators.required],

    });
  }



  onSubmit(value){
    this.firebaseService.updateSectionValue(this.item.id, value)
      .then(
        res => {
          this.router.navigate(['/display-section']);
        }
      )
  }

  delete(){
    this.firebaseService.deleteSection(this.item.id)
      .then(
        res => {
          this.router.navigate(['/display-section']);
        },
        err => {
          console.log(err);
        }
      )
  }

  cancel(){
    this.router.navigate(['/layout']);
  }

}
