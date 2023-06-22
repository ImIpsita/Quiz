import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';
Swal

@Component({
  selector: 'app-pre-instruction-quiz',
  templateUrl: './pre-instruction-quiz.component.html',
  styleUrls: ['./pre-instruction-quiz.component.css']
})
export class PreInstructionQuizComponent {


  quizId;
  quizz;
  constructor(private activatedRoute:ActivatedRoute,private _quiz:QuizService,private route:Router) {}
   ngOnInit() : void {

    this.activatedRoute.params.subscribe(
      param=>{
        this.quizId=param['quizzzId']
      },
      (error)=>{
        console.log('inside preInstruction error');
        console.error(error);
      })

      this._quiz.getQuiz(this.quizId).subscribe(
        (data : any)=>{
            console.log(data);
          this.quizz=data;
          console.log('inside preinstruction fetch all quiz details success')
        },
        (error)=>{
          console.log('inside preinstruction fetch all quiz details error')
          console.error(error);

        }
      )

  }

  startQuiz(){
    Swal.fire({
      title: 'Do you want to Start Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Cancel`,
      icon: 'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.route.navigate(['/start/'+ this.quizId])
      }
    })
  }

}
