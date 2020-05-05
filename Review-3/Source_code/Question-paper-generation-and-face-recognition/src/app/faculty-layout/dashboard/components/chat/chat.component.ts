import { Component, OnInit, ViewChildren, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { Action } from './shared/model/action';
import { Event } from './shared/model/event';
import { Message } from './shared/model/message';
import { User } from './shared/model/user';
import { SocketService } from './shared/services/socket.service';
import { AuthService } from '../../../../shared/services/auth.service';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

const AVATAR_URL = 'https://api.adorable.io/avatars/285';
//const AVATAR_URL = (user.photoURL) ? user.photoURL : '/assets/dummy-user.png';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  action = Action;
  user: User;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;
  userData:any;
  timeformat:any;
  messagehistory: Message[] = [];
  setMsgHistory="false";


  constructor(private socketService: SocketService,public authService: AuthService,public firebaseService:FirebaseService) {
    }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user'));
    localStorage.removeItem("setMsgHistory");
    this.initModel();
    setTimeout(() => {
     this.openUserPopup();
    }, 0);

  }



  private initModel(): void {
    const randomId = this.getRandomId();
    this.user = {
      id: randomId,
      avatar: this.userData.photoURL

      
    };
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
     
  

      });




    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }


  private openUserPopup(): void {  
      this.user.name = this.userData.displayName;
      this.initIoConnection();

  }
  public messagesfn(message){
    this.firebaseService.createMessage(message);
  };

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    for(var i=0;i<this.messages.length;i++){
     
      this.messages[i].timeFormat=timeAgo.format(new Date(this.messages[i].time));
      
    }

    this.socketService.send({

      
      from: this.user,
      content: message,
      time: new Date(),
      timeFormat:timeAgo.format(new Date())

    })
   
    this.messageContent = null;
  }

}
