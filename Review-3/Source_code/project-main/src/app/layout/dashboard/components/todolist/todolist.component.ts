import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
    notifs: any;
  userData: any;
  lists: any;
  showlist: boolean;
    constructor(    public firebaseService: FirebaseService,public router:Router) { }
    ngOnInit() { 
     this.getData();
    }
    
    getData(){
        this.firebaseService.getList()
        .subscribe(result => {
          this.lists = result;
          if(this.lists.length>0){
            this.showlist=true;
          }else{
            this.showlist=false;
          }
          console.log("lisydt", this.lists)
        })
      }
      taketest(){
        this.router.navigate(['/layout/layout/student-dashboard']);
      }
}
