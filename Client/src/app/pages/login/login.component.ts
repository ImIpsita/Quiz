import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  loginData={
    userName:'',
    password:'',
  };
  constructor(private  _snack:MatSnackBar,private login:LoginService,private route:Router) {}

  loginSubmit(){
    if (this.loginData.userName.trim() == '' || this.loginData.userName == null) {
      // alert('userName is required!!');
      this._snack
      .open('UserName is required','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });
      return;
    }
    //passsword validation
    if (this.loginData.password.trim()=='' || this.loginData.password==null ) {
      this._snack
      .open('Password is required','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });
      return;
    }
      
    this.login.generateToken(this.loginData).subscribe(
     (data:any) => { 
      console.log('success in login');
      console.log(data);

     this.login.loginuserToken(data.token);
     console.log('success in login1');
      console.log(data.token);

     this.login.currentUser().subscribe(
     (user:any)=>{
         this.login.userDetails(user);
         console.log('success in login-user');
         console.log(user);
         //redirect admin dashBoard
           if(this.login.getUserRoles()=='ADMIN'){
            console.log(this.login.getUserRoles());
               //window.location.href='/admin';
              this.route.navigate(['admin'])
              this.login.logicStatusSubject.next(true)
               //redirect NormalUser dashboard
           } else if(this.login.getUserRoles()=='NORMAL'){
           // window.location.href='/normal';
           this.route.navigate(['normal'])
           this.login.logicStatusSubject.next(true)
           }else{
               this.login.logout();
           }
         
     }

     );
   },
     (error:any) => {
      console.log(error);
      this._snack
      .open('Invalid Credential!!Try Again','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
      });
     }
    );

  }
}
