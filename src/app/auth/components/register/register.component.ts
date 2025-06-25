import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  emailValue: string = '';
  passwordValue1: string = '';
  passwordValue2: string = '';
  nameValue: string = '';
  invalidName: boolean = false;
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  unmatchingPassword: boolean = false;
  invalidEmailMessage: string = 'The email is invalid';
  invalidNameMessage: string = "The name can only contains letter and can't be empty";
  invalidPasswordMessage: string = 'The password is invalid';
  unmatchingPasswordMessage: string = "Passwords don't match"
  errorMessage: string = 'The user is already registered on the platform. Please login';
  registerError: boolean = false;



  constructor(private authService: AuthService, private router: Router) {
    }

  register() {
    this.registerError = false;
    if(this.emailValue === '' || this.nameValue === '' || this.passwordValue1 === '' || this.passwordValue2 === '') {
      this.registerError = true;
      this.errorMessage = 'All the fields are required';
    }
    else {
      let registrationStatus = this.authService.register(this.emailValue,this.passwordValue1,this.nameValue);
    if(registrationStatus) {
      this.router.navigateByUrl("/weather")
      localStorage.setItem('isLogin','yes');
    } else {

      this.registerError = true;
      this.errorMessage = "The user was not registered";
    }
    }
  }

  onNameChange(event: any) {
    this.registerError = false;
    if(this.nameValidation(event.target.value)) {
      this.invalidName = false;
    } else {
      this.invalidName = true;
    }
  }

  nameValidation(name: string) {
    const regex = new RegExp('^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$');
    if(name.match(regex) && name.length >= 2 && name.length <= 50) {
      return true;
    } else {
      return false;
    }
  }

  onEmailChange(event: any) {
    this.registerError = false;
    if(this.emailValidation(event.target.value)) {
      this.invalidEmail = false;
    } else {

      this.invalidEmail = true;
    }
  }

  emailValidation(name: string) {
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if(name.length > 0 && regex.test(name)) {
      return true;
    } else {
      return false;
    }
  }

  onPassword1Change(event: any) {
    this.registerError = false;
    if(this.password1Validation(event.target.value)) {
      this.invalidPassword =  false;
    } else {
      this.invalidPassword = true;
    }
  }

  onPassword2Change(event: any) {
    this.registerError = false;
    if(this.password2Validation(event.target.value)) {
      this.unmatchingPassword = false;
    } else {
      this.unmatchingPassword = true;
    }
  }

  password1Validation(password: string) {
    if(password.length >= 8) {
      return true;
    } else {
      return false;
    }
  }

  password2Validation(password: string) {
    if(password === this.passwordValue1) {
      return true;
    } else {
      return false;
    }
  }





}
