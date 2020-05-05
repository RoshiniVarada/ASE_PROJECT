import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
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
          console.log( this.notifs)
          this.userData = JSON.parse(localStorage.getItem('user'));
        })
      }
}
