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
    this.loginError = false;
    console.log(this.emailValue);
    console.log(this.passwordValue);
    let user = this.authService.login(this.emailValue, this.passwordValue);
    console.log(user);
    if(user === undefined) {
      this.loginError = true;
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/auth/register');
  }

 nextUser = (response: User | undefined) => {
  if(response === undefined) {
    this.loginError = true;
  }
   console.log(response);
 }

 errorGettingNextUser = (error: any) => {
  console.log(error);
 }

}
