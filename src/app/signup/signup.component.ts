import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';

import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      loginId: [''],
      email: [''],
      password: ['']
    })
  }
  signup() {
    let obj = {
      "LoginId": this.signupForm.value.loginId,
      "Name": this.signupForm.value.fullname,
      "EmailAddress": this.signupForm.value.email,
      "Password": this.signupForm.value.password
    }
    console.log(obj);

    this.apiService.singnup(obj).subscribe(res => {
        alert("signup successfully");
        this.signupForm.reset();
        this.router.navigate(['login']);
      })

  }

}
