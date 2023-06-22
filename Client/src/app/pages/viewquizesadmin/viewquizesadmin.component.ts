import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquizesadmin',
  templateUrl: './viewquizesadmin.component.html',
  styleUrls: ['./viewquizesadmin.component.css']
})
export class ViewquizesadminComponent {

  quizzes = []
  constructor(private _quiz:QuizService,private _snack:MatSnackBar){}

  ngOnInit(): void {

    this._quiz.viewQuiz().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);

      },
      
        (error)=>{
          console.error(error);
          Swal.fire('Error !!',"Error in get Quiz",'error');

          });

  }

  deleteQuiz(qId){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this._quiz.deleteQuiz(qId).subscribe(
          (data:any)=>{
            console.log(data);
           this.quizzes= this.quizzes.filter((quiz)=>quiz.qId!=qId);
           console.log('inside view quiz')
            console.log(this.quizzes);
    
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Quiz deleted Successful',
              showConfirmButton: false,
              timer: 3000
            })
          },
           
          (error)=>{
            console.log('inside view quiz')
              console.log(error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong in delete Quiz',
              })
        });
      }
    })

















    

      

  }

}
