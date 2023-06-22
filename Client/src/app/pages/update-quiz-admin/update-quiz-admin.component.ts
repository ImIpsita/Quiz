import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CatagoryserviceService } from 'src/app/service/catagoryservice.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz-admin',
  templateUrl: './update-quiz-admin.component.html',
  styleUrls: ['./update-quiz-admin.component.css']
})
export class UpdateQuizAdminComponent {

  constructor(private _activateRoute:ActivatedRoute,private _updatequiz:QuizService,private _catagories:CatagoryserviceService,private _snack:MatSnackBar,private router:Router) {}

  //constructor(private _updatequiz:QuizService) {}

  qId;
  updatequiz;
  quizcatagories=[];

  ngOnInit(): void {

//get quizid from requestparam
  this._activateRoute.params.subscribe(params => {
        this.qId= params['quizId'];
        console.log('inside activateroute')
        console.log(this.qId);
      });

   this._updatequiz.getQuiz(this.qId).subscribe(
       (data:any)=>{
          this.updatequiz=data;
          console.log('Update quiz');
          console.log(this.updatequiz);
       },
       (error)=>{
        console.log('Update quiz error');
        console.error(error);
       }

      )
     
       //get all catagories list
    this._catagories.categories().subscribe(
      (data:any)=>{
        this.quizcatagories=data;
        console.log(data);
      },
      (error)=>{
        console.error(error);
        Swal.fire('error!!',"Error in data loading in add quiz",'error');
      });
  }

  updateQuiz(){
      
    console.log(this.updatequiz);
    if(this.updatequiz.title.trim()=='' || this.updatequiz.title==null){
      this._snack.open("Title is required",'',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });

      return;
    }

    if(this.updatequiz.maxMarks.trim()=='' || this.updatequiz.maxMarks==null){
      this._snack.open("Max mark is required",'',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });

      return;
    }

if(this.updatequiz.numberofQuestion.trim()=='' || this.updatequiz.numberofQuestion==null){
      this._snack.open("Please Fillup Displayed Question Number",'',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });

      return;
    }

    this._updatequiz.updateQuiz(this.updatequiz).subscribe(
      (data:any)=>{
          
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Quiz Updated Successful',
         showConfirmButton: true,
         timer: 3000
       })
       this.router.navigate(['/admin/quiz'])
      },
 
      (error)=>{
        
       this._snack
         .open('Error!!','Error In update Catagory',{
         duration:3000,
         horizontalPosition:'right',
         verticalPosition:'top',
       });
 
 
      });

  }

}
