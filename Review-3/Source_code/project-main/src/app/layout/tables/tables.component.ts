import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    item: any;
    item_sec: any;
    section: any;
    Users: any;
    constructor(public firebaseService:FirebaseService) {}

    ngOnInit() {
        this.sectionDisplay();
        this.getUsers();
    }


    sectionDisplay(){
        this.item= localStorage.getItem("UserDetails");
        this.item_sec=JSON.parse(this.item)
        this.firebaseService.searchUsersSection(this.item_sec.Section)
        .subscribe(result => {
          this.section = result;
          console.log("fghdjksnmbcvsghj",this.section)
        })
      }

      getUsers(){
        this.firebaseService.getUsers()
        .subscribe(result => {
          this.Users = result;
          console.log("fghdjksnmbcvsghj",this.Users)
        })
      }
      
}
