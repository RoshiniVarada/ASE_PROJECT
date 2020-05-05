import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../shared/services/quiz.service';
import { HelperService } from '../../shared/services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../../models/index';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizes: any[];
  showModal='false';
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 300,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  quizmarks: number;
  marks=0;
  finalmarks=0;
  totalmarks=10;
  doughnutChartType = 'doughnut';
  percent: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    
      var main=JSON.parse(localStorage.getItem("assgn"));
    this.loadQuiz(main);
    localStorage.removeItem("assgn");
  }

  loadQuiz(quizName: any) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    if (question.options.every(x => x.selected === eval(x.isAnswer))){
      question.type=true;
    }else{
      question.type=false;
    }

 
    return question.options.every(x => x.selected === eval(x.isAnswer)) ? 'correct' : 'wrong';
    
   
  };

  onSubmit() {

    this.mode = 'result';


  }

  marksCalculation(){
    this.marks=0;
    if(this.quiz.questions && this.quiz.questions.length>0){
      for(var i=0;i<this.quiz.questions.length;i++){
        if(this.isCorrect(this.quiz.questions[i])=="correct"){
          this.marks++;
          
          
        }
        if(this.quiz.questions.length==i+1){
          this.finalmarks=this.marks;
          this.percent=(this.finalmarks/this.totalmarks) *100;
  
        }
     }
    }
   return  this.percent;
  }
}
