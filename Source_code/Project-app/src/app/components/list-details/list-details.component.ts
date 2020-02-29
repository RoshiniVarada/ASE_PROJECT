import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  constructor(
     public authService: AuthService,
    public ngZone: NgZone) {
   
    
   }

  ngOnInit() {
  }

}
