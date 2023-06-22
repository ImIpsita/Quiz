import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatagoryserviceService } from 'src/app/service/catagoryservice.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent {

  catId;
  quizsInfo;
  catagories = [];
  constructor(private _cat:CatagoryserviceService) {}

  ngOnInit() : void {

    this._cat.getAllCatagory().subscribe(
      (data : any)=>{
         console.log('inside all catagories');
         this.catagories=data;
         console.log(data);
       },
      (error)=>{
        console.error(error);
      });
 
 
      

        }

  
      
  

   



}
