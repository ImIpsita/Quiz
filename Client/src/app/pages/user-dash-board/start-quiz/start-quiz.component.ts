import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionadminService } from 'src/app/service/questionadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {

  qid;
  questions=[];
  totalMark=0;
  attemptqstn=0;
  correctAnswer=0;
  timer:any;

  isSubmit=false;
  constructor(private location:LocationStrategy,private activeRoute:ActivatedRoute,private qstn:QuestionadminService) {}

  ngOnInit() : void{
 // this.preventBackButton();
  this.activeRoute.params.subscribe(
    param=>{
         this.qid=param['qId']
         console.log('inside start quiz')
        //  alert(this.qid);
    },
    (error)=>{
        console.error(error);
    }
  )
  this.loadQuestions();
  }

//getting all question of quiz
loadQuestions(){
  this.qstn.getQuizQuestions(this.qid).subscribe(
    (data:any)=>{
      console.log('inside get all qstn of the quiz success before add')
      this.questions=data;
      console.log(data);

      //N:B--set timer for each question set 1 min
      //here the timer object contains value in seconds.
      this.timer=this.questions.length*1*60;
      this.startTimer();

      // this.questions.forEach((q)=>{
      //     q['givenAnswer']='';
      // });
      // console.log('inside get all qstn of the quiz success after')
      // console.log(data);
      // this.questions=data;
      
    },
    (error)=>{
      console.log('inside get all qstn of the quiz error')
      console.error(error);
    }
  )
}

//prevent back button once gp on start-quiz page
  // preventBackButton(){

  //   history.pushState(null,null,location.href);
  //    this.location.onPopState(()=>{
  //     history.pushState(null,null,location.href);
  //    })
  // }


  submitQuiz(){
   Swal.fire({
      title: 'Do you want to submit the quiz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'submit',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        Swal.fire('Your Answer has been Saved!', '', 'success')
        this.evalQuiz();
       
        } 
    })
  }

  printpage(){
    window.print();
  }

  startTimer(){
    let t=window.setInterval(()=>{
        if(this.timer<=0){
         // this.submitQuiz();
          this.evalQuiz();
          clearInterval(t);
        }else{
          this.timer--;
        }
    },1000)
  }

  getFormattedTimer(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60
    return `${mm}min : ${ss}sec`
  }

  evalQuiz(){

    this.qstn.getTotalmark(this.questions).subscribe(
      (data:any)=>{
           
           this.correctAnswer=data.CorrectAnswerNo;
           this.attemptqstn=data.AttemptQuestions;
           this.totalMark=data.Securedmark;
           console.log('inside attempt sucess:'+this.attemptqstn);
           console.log('inside secured sucess:'+this.totalMark);
           console.log('inside correct answer sucess:'+this.correctAnswer);
      },
      (error)=>{
        console.log('inside total mark error')
        console.error(error);
        console.log('inside attempt sucess:'+this.attemptqstn);
        console.log('inside secured sucess:'+this.totalMark);
        console.log('inside correct answer sucess:'+this.correctAnswer);
      }
    )
    this.isSubmit=true;
    
  }
}
