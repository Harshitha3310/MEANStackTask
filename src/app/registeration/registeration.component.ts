import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  regInfo: FormGroup;
  titlelength: any = 0;
  titlelength1: any = 0;
 
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private formBuilder: FormBuilder,private router: Router,private service:MainService) {
    this.regInfo = this.formBuilder.group({
      uName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      pUrl: ['', [Validators.required]],
      pNumber: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]],
      gender: ['', [Validators.required]],
      comment: [''],
      pwd: ['',[Validators.required]]

    });
  }

  regInfoSub() {
    // console.log(form.value);
    // this.regInfo.value.uName
    var data= {
      "uname": this.regInfo.value.uName,
      "password": this.regInfo.value.pwd,
      "url": this.regInfo.value.pUrl,
      "number": this.regInfo.value.pNumber,
      "comments":this.regInfo.value.comment,
      "gender": this.regInfo.value.gender,
      "email": this.regInfo.value.email
    }
    this.service.regMethod(data).subscribe(res =>{
      console.log("res",res);
      //this.router.navigateByUrl('/login');
      this.router.navigateByUrl('/');
    },err=>{
      this.router.navigateByUrl('/register');
    });
      
  }

  checkTitle(event) {
    this.titlelength = event.target.value.trim().length;
  }

  checkTitle1(event) {
    console.log("event",this.regInfo)
    this.titlelength1 = event.target.value.trim().length;
  }

  ngOnInit() {
   
  }

}
