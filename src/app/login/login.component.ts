import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent {
  registrationForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.userService.logIn(this.registrationForm.value)
        .then(response => {
          console.log(response.user);
          // Aquí puedes redirigir al usuario a la página de inicio o a otra página deseada
        })
        .catch(error => console.log(error));
    }
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        // Aquí puedes redirigir al usuario a la página de inicio o a otra página deseada
      })
      .catch(err => console.log(err));
  }
}
