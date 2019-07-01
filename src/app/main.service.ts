import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  rootUrl = 'http://localhost:5000';
  regUrl = this.rootUrl + '/userdetails';
  LoginUrl = this.rootUrl + '/login';
  getAllDetailsUrl = this.rootUrl + '/getallusers';
  updateUrl = this.rootUrl + '/updateuser';
  deleteUrl = this.rootUrl + '/deleteuser';
  getParticularUser = this.rootUrl + '/getuserinfo';

  login(data){
    return this.http.post(this.LoginUrl,data);
  }

  
  regMethod(data){
    return this.http.post(this.regUrl,data);
  }

  
  getDetails(data){
    return this.http.post(this.getAllDetailsUrl,data);
  }

  
  upadate(data){
   return this.http.post(this.updateUrl,data);
  }

  
  delete(data){
    return this.http.post(this.deleteUrl,data);
  }
  getparticularuser(data)
  {
    return this.http.post(this.getParticularUser,data);
  }
 
}
