import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-questioncatagory',
  templateUrl: './load-questioncatagory.component.html',
  styleUrls: ['./load-questioncatagory.component.css']
})
export class LoadQuestioncatagoryComponent {
   
  catId;
  quizzes=[];
  categoryTitle;
  constructor(private activateRoute:ActivatedRoute,private quiz:QuizService) {}

  ngOnInit() : void {

this.activateRoute.params.subscribe(
      param=>{
        this.catId=param['catId'];
        //alert(this.catId)
        this.quiz.getAllQuizsBycatId(this.catId).subscribe(
          (data:any)=>{
            console.log('get quiz data by catId')
            this.quizzes=data;
            console.log(this.quizzes)
          },
          (error)=>{
            console.log(' Error get quiz data by catId')
            console.error(error);
          });
        console.log(this.catId);
        },
      (error)=>{
           console.log('inside fetch catId for normal user');
           console.error(error);
      });

      this.activateRoute.params.subscribe(
        param=>{
          this.categoryTitle=param['catTitle']
        },
        (error)=>{
          console.error(error);
        }
      )
   }
}
