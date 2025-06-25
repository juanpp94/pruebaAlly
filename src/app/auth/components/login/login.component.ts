import { Component } from '@angular/core';
import { User } from '../../../core/models/user.interface';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailValue: string = '';
  passwordValue: string = '';
  errorMessage: string = 'The user or the password is incorrect';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    if(this.emailValue === '' || this.passwordValue === '') {
      this.loginError = true;
      this.errorMessage = 'All the fields are required';
    }  else {
       this.loginError = false;
        let user = this.authService.login(this.emailValue, this.passwordValue);

        if(user === undefined) {
          this.loginError = true;
        } else {
          localStorage.setItem('isLogin','yes');
          this.router.navigateByUrl("/")

        }

    }

  }



}
