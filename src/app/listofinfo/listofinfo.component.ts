import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listofinfo',
  templateUrl: './listofinfo.component.html',
  styleUrls: ['./listofinfo.component.scss']
})
export class ListofinfoComponent implements OnInit {
  updateInfo: FormGroup;
  deleteInfo:FormGroup;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  titlelength: any=0;
  titlelength1: any=0;
  altEmail: any;
  userinfo1: any;
  url:any;
  uname:any;
  pNumber:any;
  email:any;
  isLoggedIn : boolean;
  navbar :boolean
  shoppingItemList: any[] = [];
  shoppingItemList_item :any[] = [];
  constructor(private formBuilder: FormBuilder,private service:MainService) { 
   
    this.updateInfo = this.formBuilder.group({
      uName: ['', [Validators.required]],
      email: [''],
      pUrl: ['', [Validators.required]],
      pNumber: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]]
     

    });
    this.deleteInfo = this.formBuilder.group({
      uName: ['', [Validators.required]],
      email: [''],
      pUrl: ['', [Validators.required]],
      pNumber: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]]

    });
  
  }
    getItem() {
     var username = localStorage.getItem('username');
     var password = localStorage.getItem('pass')
     var role_login = localStorage.getItem('role');
    //alert(role_login);
      var data = {
        "email": username,
        "password": password
      }
     
      this.service.getDetails(data).subscribe(res=>{
        console.log(res);
        if(role_login =='admin')
        {
          this.shoppingItemList = res;
          this.isLoggedIn = true;
        }
        else{
          this.shoppingItemList = res;
          this.isLoggedIn = false;
        }
      })
  }
  userinfo(col)
  {
    console.log(col);
    this.email = col.email;
    
  }
  userinfo_delete(col)
  {
    console.log(col);
    this.email = col.email;
    
  }
  userinfo_view(col)
  {
    console.log(col);
    var data ={
      "email":col.email
    }
    this.email = col.email;
    this.service.getparticularuser(data).subscribe(res=>{
      console.log(res);
      
      this.shoppingItemList_item = res;
    })
  }
  checkTitle(event) {
    this.titlelength = event.target.value.trim().length;
  }

  checkTitle1(event) {
    this.titlelength1 = event.target.value.trim().length;
  }
  ngOnInit() {
    this.getItem();
    this.navbar = true;
  }
  
  update(){
    var data = {
      "uname": this.updateInfo.value.uName,
      "url": this.updateInfo.value.pUrl,
      "number": this.updateInfo.value.pNumber,
      "email": this.updateInfo.value.email,
      "altemail":this.updateInfo.value.email
    }
    this.service.upadate(data).subscribe(res =>{
      console.log("res",res);
    });
  }

  deleteUser(){
    
    var username = localStorage.getItem('username');
    var data = {
      "email": username,
      "altEmail":this.updateInfo.value.email
    }
    this.service.delete(data).subscribe(res =>{
      console.log("res",res);
    });
  }

}
