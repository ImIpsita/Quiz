import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatagoryserviceService } from 'src/app/service/catagoryservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcatagoryadmin',
  templateUrl: './addcatagoryadmin.component.html',
  styleUrls: ['./addcatagoryadmin.component.css']
})
export class AddcatagoryadminComponent {

  addcatagory = {
    title:'',
    description:'',
    catId:'',

  };
  constructor(private _snack:MatSnackBar,private _catagory:CatagoryserviceService,private route:Router){ }

    ngOnInit(): void {

    }

    addCatagoryItem(){

      if(this.addcatagory.title.trim()=='' || this.addcatagory.title==null){
        this._snack
        .open('Title is required To Add Catagory','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });
      return;
      }

      this._catagory.addCatagory(this.addcatagory).subscribe(
       (data:any)=>{

        

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Catagory Added Successful',
          showConfirmButton: true,
          timer: 3000
        })
        this.route.navigate(['/admin/catagory'])
       },
       (error)=>{

        this._snack
        .open('Error!!','Error In Add Catagory',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });
      

       }


      )
         

      
    }
 

}
