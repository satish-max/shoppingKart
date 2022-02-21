import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../Shared/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginId: [''],
      password: ['']
    })
  }
  login() {
    // let obj = {
    //   "loginId": this.loginForm.value.loginId,
    //   "password": this.loginForm.value.password
    // }
    console.log(this.loginForm.value);

    this.apiService.login(this.loginForm.value.loginId).subscribe((resp: any) => {
      console.log(resp);
      if (resp && this.loginForm.value.password === resp.password) {
        this.router.navigateByUrl('dash/'+this.loginForm.value.loginId);
        // this.router.navigate(['dash'])
        this.loginForm.reset();
      } else {
        alert("Please enter valid Password.")
      }
    }, error => {
      alert("Please enter valid login Id.")
    })
    
  }

}
