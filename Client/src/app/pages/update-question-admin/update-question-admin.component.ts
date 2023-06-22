import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionadminService } from 'src/app/service/questionadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question-admin',
  templateUrl: './update-question-admin.component.html',
  styleUrls: ['./update-question-admin.component.css']
})
export class UpdateQuestionAdminComponent {

  qstnId;
  updateQstn;
  constructor(private activateRoute:ActivatedRoute,private _updateqstn:QuestionadminService){}

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
     params=>{
      this.qstnId=params['qstnId']
        console.log(this.qstnId)
     })

     //get request qstn details by id
     this._updateqstn.getQuestionById(this.qstnId).subscribe(
      (data)=>{
        console.log(data);
        this.updateQstn=data;
      },
      (error)=>{
        console.error(error);
      });
  }

  updateQstnItem(){

    this._updateqstn.updateQstn(this.updateQstn).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          showConfirmButton: true,
          text: 'Question Updated Successfully',
          timer: 3000

        })
      },
      (error)=>{
        console.log('inside update qstn');
        console.error(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          showConfirmButton: true,
          text: 'something went wrong in Question updatation',
          timer: 3000

        })
      }

    )

  }

  





}
