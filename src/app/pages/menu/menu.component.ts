import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogin:boolean = false;
  isMenuCollapsed = true;


  constructor(private usrService:UserService, private router : Router) { 
    this.usrService.isAuthenticate()
    .subscribe(login=>{
      this.isLogin=login;
    })
       
  }

  salir(){
    this.usrService.logOut();
    this.router.navigateByUrl('/');
  }


  

  ngOnInit(): void {
  }

}
