import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formAuth:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  async onClickLogin(){
    let response=await this.authService.login(this.formAuth.value).catch(error=>{
      console.log(error);
    });
    if(response){
      this.router.navigate(['/home']);
    }
  }

}
