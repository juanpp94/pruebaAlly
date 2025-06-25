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
    let registrationStatus = this.authService.register(this.emailValue,this.passwordValue1,this.nameValue);
    if(registrationStatus) {
      console.log('registro exitoso');
      this.router.navigateByUrl("/weather")
    } else {
      console.log('registro no exitoso');
      this.registerError = true;
    }
  }

  onNameChange(event: any) {
    console.log(event.target.value);
    if(this.nameValidation(event.target.value)) {
      console.log('es valido');
      this.invalidName = false;
    } else {
      console.log('es invalido');
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
    console.log(event.target.value);
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
    console.log(event.target.value);
    if(this.password1Validation(event.target.value)) {
      this.invalidPassword =  false;
    } else {
      this.invalidPassword = true;
    }
  }

  onPassword2Change(event: any) {
    if(this.password2Validation(event.target.value)) {
      this.unmatchingPassword = false;
    } else {
      this.unmatchingPassword = true;
    }
    console.log(event.target.value);
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

  nextUser = (response: User) => {
    console.log(response);
    if(response === undefined) {
      console.log('ok');
    } else {
      console.log('el usuario ya estaba registrado');
      this.registerError = true;
    }
  }

  goToLogin()  {
    this.router.navigateByUrl('/auth/login');
  }


}
