import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../../shared/services/firebase.service';

@Injectable()
export class EditSectionResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let sectionId= route.paramMap.get('id');
      this.firebaseService.getSection(sectionId)
        .subscribe(
          data => {
            resolve(data);
          }
        );
    })
  }
}
