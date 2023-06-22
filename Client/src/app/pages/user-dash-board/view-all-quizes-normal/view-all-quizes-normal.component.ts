import { Component } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-view-all-quizes-normal',
  templateUrl: './view-all-quizes-normal.component.html',
  styleUrls: ['./view-all-quizes-normal.component.css']
})
export class ViewAllQuizesNormalComponent {
   
  quizs;
  constructor(private quiz:QuizService) {}

  ngOnInit() : void {

    this.quiz.getAllQuizzes().subscribe(
      (data:any)=>{
        console.log('inside all quiz');
        this.quizs=data;
        console.log(data);
      });

  }

 

}
