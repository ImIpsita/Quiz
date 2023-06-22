import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userDetails=null;
  constructor(private login:LoginService){}

  ngOnInit(): void {
      // this.userDetails=this.login.getUser();
      this.login.currentUser().subscribe(
        (userDetails:any)=>{
          this.userDetails=userDetails;
        },
        (error)=>{
          alert("Error occured")
        }
        )

      
  }
}
