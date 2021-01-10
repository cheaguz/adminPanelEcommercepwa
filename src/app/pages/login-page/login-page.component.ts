import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from 'src/app/services/user.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
myForm : FormGroup;
message;

  constructor( private fb:FormBuilder, private usrServ :UserService,private router:Router) { 
    this.myForm=this.fb.group({
      user:[""],
      password:[""]
    }); 

    console.log(this.myForm.value);
  }



  login(){
    this.usrServ.login(this.myForm.value)
    .subscribe(
      data=>{
        if(data["token"]){
          this.usrServ.authenticate(data["token"],data["usuarioId"]) 
          this.router.navigateByUrl('/productos')
        }else{
          this.message=(data["message"])  
        }
      },
      err=>{
        console.log(err)
      }
    )
  }






  ngOnInit(): void {
  }

}




