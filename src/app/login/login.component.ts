import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Aquí puedes manejar la lógica de autenticación
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Por ejemplo, podrías enviar los datos a un servidor para autenticar
  }

  goToHome(): void {
    this.router.navigate(['/']);  // Redirige a la página principal
  }
}
