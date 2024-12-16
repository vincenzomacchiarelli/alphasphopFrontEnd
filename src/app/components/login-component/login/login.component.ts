import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreModule } from "../../../modules/core/core.module";
import { AuthappService } from '../../../services/authapp.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, CoreModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userId: string = '';
  password: string = '';
  authenticated: boolean = true;
  allowed: boolean = false;
  errMsg: string = 'Spiacente, utente non riconosciuto!';
  okMsg: string = 'Accesso permesso!';
  titolo: string = 'Accesso & Autenticazione';
  sottotitolo: string = 'Inserire le credenziali per accedere al sistema';

  constructor(
    private router: Router,
    private authService: AuthappService
  ) { }

  ngOnInit(): void {
  }

  gestAuth = (): void  => {
    console.log('userID: ' + this.userId + ' password: ' + this.password);
    if(this.authService.autenticate(this.userId, this.password)){
      this.authenticated = true;
      this.allowed = true;
      this.router.navigate(['/welcome', this.userId]);
    }else{
      this.authenticated = false;
      this.allowed = false;
    }
  }


}
