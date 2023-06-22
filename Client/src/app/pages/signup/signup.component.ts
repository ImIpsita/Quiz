import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userServ: UserService,private _snack:MatSnackBar,private route:Router) { }
  public user = {

    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
  };

  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user)
    if (this.user.userName == '' || this.user.userName == null) {
      // alert('userName is required!!');
      this._snack
      .open('UserName is required','',{
        duration:1000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });
      return;
    }


    // addUser:userservice
    this.userServ.addUser(this.user).subscribe(

      (data) => {
        console.log(data);
        // alert('Success');
        // this._snack.open("Register Successful",'',{
        //   duration:1000,
        //   horizontalPosition:'right',
        //   verticalPosition:'top',
        // });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Register Successful',
          showConfirmButton: true,
          timer: 5000
        })
        this.route.navigate(['signup'])
      },
      (error) => {
        console.log(error);
        //alert("something went wrong");
        this._snack.open("something went wrong!!",'',{
          duration:1000,
          horizontalPosition:'right',
          verticalPosition:'top',
        });
      }

      
    );
   
  }

}
