import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Project-app';
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {

   }
   goToHome(){
    this.router.navigate(['home']);
   }

}