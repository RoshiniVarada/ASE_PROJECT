import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    subjects: any;
    newAlert:String;
    textAlert:String;
    removeCreate='false';
    constructor( public firebaseService: FirebaseService) {
    }

    ngOnInit() {
        this.getData();
        this.removeCreate=localStorage.getItem('removeCreate');
    }
  
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public  createAlert(){
        this.firebaseService.createAlert(this.newAlert);
        var alert1={description:"new announcement has been made",title:this.newAlert};
        this.firebaseService.createNotifications(alert1);
        this.removeCreate="false";
        localStorage.setItem('removeCreate','false');
    }
    public removeAlert(){
        this.removeCreate='false';
        localStorage.setItem('removeCreate','false');
    }

    public  editAlert(alert){
        this.textAlert=alert.payload.doc.data().description
        alert.edit="true";

    }
    public  saveAlert(alert){
        alert.description=this.textAlert;
        this.firebaseService.editAlert(alert);
        alert.edit="false";
    }

    public  deleteAlert(alert){
        this.firebaseService.deleteAlert(alert);
    }

    getData(){
        this.firebaseService.getSubjects()
        .subscribe(result => {
          this.subjects = result;
          console.log( this.subjects)
        })



       this.getAlerts();
        
      }

      getAlerts(){
        this.firebaseService.getAlerts()
        .subscribe(result => {
          this.alerts = result;
          for(var i=0;i<this.alerts.length;i++){
            this.alerts[i].edit="false";
          }
         
        })

      }


}
