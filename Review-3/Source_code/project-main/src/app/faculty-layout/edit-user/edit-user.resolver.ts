import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../../shared/services/firebase.service';

@Injectable()
export class EditUserResolver implements Resolve<any> {
  items: any;
  storeUser: any;
  userId: any;
  signin: boolean;
  found=false;
  foundUser: string;

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
       this.storeUser=JSON.parse(localStorage.getItem("user"));
      this.firebaseService.getUsers()
      .subscribe(resp => {
        this.items = resp;
        for(var i=0;i< resp.length;i++){
          if(this.foundUser!="true"){
            if(this.items[i].payload.doc.data().email==this.storeUser.email){
              resolve(this.items[i]);
              this.foundUser="true";
             }
          }
      
          
         
        }
      })


     

    })
  }
}
