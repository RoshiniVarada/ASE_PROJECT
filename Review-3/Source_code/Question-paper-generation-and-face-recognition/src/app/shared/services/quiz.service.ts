import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }
  get(data) {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://e30s01zjdf.execute-api.us-east-1.amazonaws.com/dev/add/"+data.Subject+"/"+data.Max_marks);
  }


}
