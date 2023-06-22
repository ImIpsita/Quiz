import { Component } from '@angular/core';
import { CatagoryserviceService } from 'src/app/service/catagoryservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewcatagoryadmin',
  templateUrl: './viewcatagoryadmin.component.html',
  styleUrls: ['./viewcatagoryadmin.component.css']
})
export class ViewcatagoryadminComponent {
  
  categories=[]
  constructor(private _category:CatagoryserviceService){}

  ngOnInit():void {

    this._category.categories().subscribe((data:any)=>{

         this.categories=data; //set data in array categories 
         console.log(this.categories);

    },
         (error)=>{
            console.log(error);
            Swal.fire("Error !!","Error in loading data",'error')
             
          });
  }

//delete quiz
deleteCatagoty(catId){

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
      this._category.deleteCatagory(catId).subscribe(
        (data:any)=>{
          this.categories=this.categories.filter((catagory)=>catagory.catId!=catId);
          console.log(this.categories);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Catagory has been deleted',
              timer: 5000
            })
          },
        (error)=>{
          console.log('inside viewCatagory')
           console.log(error);
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong in delete Catagory',
          })
      });
    }
  })





















  
  

  

}





}
