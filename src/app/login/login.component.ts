import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username: string; // 1. binding頁面的[(ngModel)]="username"
  password: string; // 2. binding頁面的[(ngModel)]="password"
  isFail: boolean = false; // 3. 是否登入失敗
  warnMessage: string = 'Incorrect username or password.'; // 4. 登入失敗的錯誤訊息

  ngOnInit() {
  }

  /** 5. 登入 */
  login() {
    if (this.username === 'tester01' && this.password === '12345678') {
      sessionStorage.setItem('user', this.username);
      this.isFail = false;
    } else {
      this.isFail = true;
    }
  }

  /** 6. 是否已經登入 */
  isLogin() {
    return sessionStorage.getItem('user') !== null;
  }

  /** 7. 登出 */
  logout() {
    sessionStorage.removeItem('user');
  }

}