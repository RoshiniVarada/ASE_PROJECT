import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/authentication-app-d33d4.appspot.com/o/javascript.json?alt=media&token=0ac9aa5e-0ad5-4f98-9770-f309df0cf4b0', name: 'JavaScript' },
      { id: 'https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/authentication-app-d33d4.appspot.com/o/aspnet.json?alt=media&token=37ca8980-3f85-4cac-b337-59bab0e74f96', name: 'Asp.Net' },
      { id: 'https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/authentication-app-d33d4.appspot.com/o/csharp.json?alt=media&token=421b57a3-33e9-4c75-8184-61d40847a442', name: 'C Sharp' },
      { id: 'https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/authentication-app-d33d4.appspot.com/o/designPatterns.json?alt=media&token=2a45e435-8bd6-4373-9992-067fdcc88da7', name: 'Design Patterns' }
    ];
  }

}
