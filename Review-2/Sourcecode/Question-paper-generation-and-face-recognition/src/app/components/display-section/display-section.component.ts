import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-display-section',
  templateUrl: './display-section.component.html',
  styleUrls: ['./display-section.component.css']
})
export class DisplaySectionComponent implements OnInit {
  sections: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    public authService: AuthService,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.firebaseService.getSections()
    .subscribe(result => {
      this.sections = result;
    })
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
  viewDetails(section){
    this.router.navigate(['/secdetails/'+ section.payload.doc.id]);
  }
  
}
