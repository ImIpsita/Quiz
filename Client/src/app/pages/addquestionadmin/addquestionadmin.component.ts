import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionadminService } from 'src/app/service/questionadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquestionadmin',
  templateUrl: './addquestionadmin.component.html',
  styleUrls: ['./addquestionadmin.component.css']
})
export class AddquestionadminComponent {
   
  quizqstnId;
  quizTitle;
  question={
    quiz:{

    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  }
  constructor(private _activeroute:ActivatedRoute,private _question:QuestionadminService,private _snack:MatSnackBar,private route:Router) {}

  ngOnInit()  : void{
    this._activeroute.params.subscribe(param=>{
      this.quizqstnId=param['quizid'];
      console.log(this.quizqstnId);
    })
    
    this._activeroute.params.subscribe(param=>{
      this.quizTitle=param['quiztitle'];
      console.log(this.quizTitle);
    })
this.question.quiz['qId']=this.quizqstnId;
  }

  //submit question
  submitQuestion(){


    if(this.question.content.trim()=='' || this.question.content==null){
      this._snack
      .open('Please Fill up Question content','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
    });
    return;
    }

    if(this.question.option1.trim()=='' || this.question.option1==null && this.question.option2.trim()=='' || this.question.option2==null
     && this.question.option3.trim()=='' || this.question.option3==null && this.question.option4.trim()=='' || this.question.option4==null){
      this._snack
      .open('Please Fill up Question options','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
    });
    return;
    }

    if(this.question.answer.trim()=='' || this.question.answer==null){
      this._snack
      .open('Please Fill up correct answer','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
    });
    return;
    }

      this._question.addQuizQuestion(this.question).subscribe(
         (data)=>{
               console.log(data);
               Swal.fire({
                icon: 'success',
                position: 'center',
                text: 'Question added successfully',
                timer: 3000
               });
  
  this.route.navigate(['/admin/viewQuestion/'+ this.quizqstnId + '/' + this.quizTitle]) 

         },
         (error)=>{
            console.error(error) ;
            Swal.fire({
              position: 'center',
              icon: 'error',
              text: 'Something went wrong in question add',
              timer: 3000
            }) 
           
         }



      )

  }
}
