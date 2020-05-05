import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    notifs: any;
  userData: any;
    constructor(    public firebaseService: FirebaseService) { }
    ngOnInit() { 
     this.getData();
    }
    
    getData(){
        this.firebaseService.getNotifications()
        .subscribe(result => {
          this.notifs = result;
          this.userData = JSON.parse(localStorage.getItem('user'));
        })
      }
}
