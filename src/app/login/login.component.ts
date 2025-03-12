import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { NgFor, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder, 
      private authService:AuthServiceService, 
      private router: Router){
        this.loginForm = this.fb.group({
          username: ['',Validators.required],
          password: ['', Validators.required]
        })
    }
    
    onSubmit(){
      if(this.loginForm.valid){
        this.authService.login(this.loginForm.value).subscribe((response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/profile']);
        }, 
        (error) => {
          this.errorMessage = 'Invalid username or password';
        }
      );
        }
    }
}
