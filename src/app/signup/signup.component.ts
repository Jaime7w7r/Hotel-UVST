import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignupComponent implements OnInit{
  registrationForm!: FormGroup;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servicio de registro
      console.log(this.registrationForm.value);
      this.userService.register(this.registrationForm.value)
      .then(response=>{
        console.log(response.user)
        this.router.navigate(['/login']);
      })
      .catch(error=>console.log(error))
      // Reiniciar el formulario
      this.registrationForm.reset();
    }
  }

}
