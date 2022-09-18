import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  submitted = false;
  isAuthonticate!: boolean;
  username !: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(name : string,password : string){
    this.submitted=true;
    this.username=name;
    if(this.username=="admin" && password=="admin"){
      this.isAuthonticate=true;
    }
    else{
      this.isAuthonticate=false;
    }
  }

}
