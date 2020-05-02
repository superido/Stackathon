import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../services/User.service';
import { TUser } from '../../../models/t-user';
// import {AlertEnum} from "../alert/alert";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  msg: string;
  // alert:AlertEnum = AlertEnum.Danger;
  app: any;
  tUser: TUser = new TUser();
  constructor(
    private router: Router,
    private userService: UserService,
    private location: Location
  ) {}
  ngOnInit() {}
  msg_(msg_: string) {
    this.msg = msg_;
  }
  check(user: TUser) {
    let result = true;
    if (!user.username) {
      this.msg = '用户名不能为空';
      result = false;
      return result;
    }
    if (!user.password) {
      this.msg = '密码不能为空';
      result = false;
      return result;
    }
    if (!user.mobilePhone) {
      this.msg = '手机号不能为空';
      result = false;
      return result;
    }
    if (!user.email) {
      this.msg = '邮箱不能为空';
      result = false;
      return result;
    }
    return result;
  }
  register() {
    console.log('register User:', this.tUser);
    if (!this.check(this.tUser)) return;
    this.userService.register(this.tUser).subscribe((data) => {
      if (data.code == 0) {
        this.router.navigate(['/login']);
      } else {
        this.msg = data.msg;
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}
