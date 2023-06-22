import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CatagoryserviceService } from 'src/app/service/catagoryservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecatagoryadmin',
  templateUrl: './updatecatagoryadmin.component.html',
  styleUrls: ['./updatecatagoryadmin.component.css']
})
export class UpdatecatagoryadminComponent {

  catId='undefind';
  updatecatagories;

  constructor(private activerouter:ActivatedRoute,private _updatecat:CatagoryserviceService,private _snack:MatSnackBar,private routr:Router) {}

  ngOnInit() : void {
   this.activerouter.params.subscribe(params =>{
     this.catId=params['cid']
     console.log(this.catId);
     })

     this._updatecat.getCatagory(this.catId).subscribe(
      (data)=>{
        console.log('inside catagory fetch')
        this.updatecatagories=data;
        console.log('End inside catagoty fetch');
          
      },
        (error)=>
      {
         console.log(error);
      }
     )

  }

  updateCatagory(){

    this._updatecat.updateCatagory(this.updatecatagories).subscribe(
      (data:any)=>{
        console.log('inside update catagory');
        console.log(data);
        console.log('end inside update catagory');

        Swal.fire({
            position: 'center',
            text: 'Catagory Updated Successfully',
            timer: 3000
           });

           this.routr.navigate(['/admin/catagory'])
      },
      (error)=>
      {
          console.error(error);
          Swal.fire({
            icon: 'error',
            position: 'center',
            text: 'Something went wrong in catagory updation',
            timer: 3000
           });
      }

    )

  }

}
