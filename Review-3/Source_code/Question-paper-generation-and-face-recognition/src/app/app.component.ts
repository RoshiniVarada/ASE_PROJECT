import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from './shared/services/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Project-app';
  signin:boolean;
  items: any;
  jsonData: any;
  constructor(
    public authService: AuthService,
    public firebaseService: FirebaseService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
   

   }
}
