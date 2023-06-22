import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userdetails = null;
  constructor(public login :LoginService,public routr:Router){

  }
  
  ngOnInit(): void{
     this.isLoggedIn=this.login.isLogged();
     this.userdetails= this.login.getUser();
   this.login.logicStatusSubject.asObservable().subscribe((data) => {
    this.isLoggedIn=this.login.isLogged();
    this.userdetails= this.login.getUser();
    });
  }

  public logout(){

    Swal.fire({
      title: 'Do you want to logout?',
      showCancelButton: true,
      confirmButtonText: 'logout',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.routr.navigate(['/login'])
        this.login.logout();
      } 
    })





    //this.login.logout();
    //this.isLoggedIn=false;
    //this.user=null;
    //this.routr.navigate(['/login'])
  }

}
