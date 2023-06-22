import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CatagoryserviceService } from 'src/app/service/catagoryservice.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquizadmin',
  templateUrl: './addquizadmin.component.html',
  styleUrls: ['./addquizadmin.component.css']
})
export class AddquizadminComponent {
  catagoriesquiz=[]
    
  quizItem ={
    title: '',
    description: '',
    numberofQuestion: '',
    maxMarks: '',
    active: '',
    catagory:
    {
      catId: ''
    }
};

  constructor(private _catquiz:CatagoryserviceService,private _snack:MatSnackBar,private _quiz:QuizService,private route:Router){}

  ngOnInit(): void {

    //get all catagories list
    this._catquiz.categories().subscribe(
      (data:any)=>{
        this.catagoriesquiz=data;
        console.log(data);
      },
      (error)=>{
        console.error(error);
        Swal.fire('error!!',"Error in data loading in add quiz",'error');
      });
  }

//add quiz
  submitQuiz(){
    console.log(this.quizItem);
    if(this.quizItem.title.trim()=='' || this.quizItem.title==null){
      this._snack.open("Title is required",'',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });

      return;
    }
    
    if(this.quizItem.maxMarks.trim()=='' || this.quizItem.maxMarks==null){
      this._snack.open("Max mark is required",'',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });

      return;
    }

    if(this.quizItem.numberofQuestion.trim()=='' || this.quizItem.numberofQuestion==null){
      this._snack.open("Please Fillup Displayed Question Number",'',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });

      return;
    }

    this._quiz.addQuiz(this.quizItem).subscribe(
     (data:any)=>{
         
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Quiz Added Successful',
        showConfirmButton: true,
        timer: 3000
      })
      this.route.navigate(['/admin/quiz'])
     },

     (error)=>{
       
      this._snack
        .open('Error!!','Error In Add Catagory',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });


     });


  }
}
