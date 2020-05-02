import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/User.service';
import { Router } from '@angular/router';
// import {TUser} from "../baseinfo/t-user";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // msg:string;
  // alert:AlertEnum = AlertEnum.Danger;

  alerts: Alert[];

  username: string;
  password: string;
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.reset();
  }
  ngOnInit() {
    // if (sessionStorage.getItem('token')) {
    //   this.router.navigate(['/']);
    // }
  }
  login() {
    // if (!this.validInput()) return;
    this.userService.login(this.username, this.password).subscribe((data) => {
      // if (data && data.success && data.userDetails.username) {
      //   // window.location.href = "/index/dashboard";
      //   this.router.navigate(['/index']);
      // } else {
      //   // this.msg = '用户名密码错误';
      // }
    });
  }

  /* 验证输入项 */
  // validInput(value: any): boolean {
  //   this.reset();
  //   let result = true
  //   if (!value.name) {
  //     this.alerts.push({type : 'danger', message: 'username required!'});
  //     result = false;
  //   }

  //   if (!value.password) {
  //     this.alerts.push({type : 'danger', message: 'password required!'});
  //     result =  false;
  //   }

  //   if (value.password.length < 6) {
  //     this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
  //     result =  false;
  //   }
  //   return result;
  // }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
