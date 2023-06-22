import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionadminService } from 'src/app/service/questionadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent {

  qid='undefind';
  quiztitle='undefind';
  questionsList=[];
  constructor(private _activateroute:ActivatedRoute,private _qstn:QuestionadminService) {}

  ngOnInit() : void {

    this._activateroute.params.subscribe(params =>{
      this.qid=  params['quizid'];
      console.log(this.qid);
    })

    this._activateroute.params.subscribe(params =>{
      this.quiztitle=  params['quiztitle'];
      console.log(this.quiztitle);
    })

    this._qstn.getQuizQuestions(this.qid).subscribe(
      (data:any)=>{
        console.log('inside quiz fetch')
        console.log(data);
        this.questionsList=data
      },
      (error)=>{
        console.error(error);
      }
    )

  }

  deleteQstn(qstnId){
 Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Delete Question'
     }).then((result) => {
      if (result.isConfirmed) {
         this._qstn.delete(qstnId).subscribe(
          (data : any)=>{
            console.log(data);
            this.questionsList=this.questionsList.filter((question)=>question.qstnId!=qstnId)
              Swal.fire({
              icon: 'success',
              text: "Question has been deleted successfully",
              timer: 3000
            })
            
          },
          (error)=>{
             console.log('inside delete question');
             console.error(error)
            Swal.fire({
              icon: 'warning',
              text: "Something went wrong in Question Deleted",
              timer: 3000
            })

          })
        }
    })

  }


}
