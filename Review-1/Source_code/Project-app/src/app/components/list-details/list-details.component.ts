import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  section1: any;
  section2: any;
  constructor(
     public authService: AuthService,
    public ngZone: NgZone,
    public firebaseService:FirebaseService,
    public router:Router ) {
   
    
   }

  ngOnInit() {
    this.firebaseService.searchUsersSection(1)
    .subscribe(result => {
      this.section1 = result;
   console.log("section1",result);
   

    })
    this.firebaseService.searchUsersSection(2)
    .subscribe(result => {
      this.section2 = result;
    })
  }

  
  onDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
      for(var i=0;i<event.container.data.length;i++){
        if(i==event.currentIndex){
          this.firebaseService.updateSection(event.container.data[i].payload.doc.id,event.container.data[i].payload.doc.data())
        }
      }
    }
  }

}
