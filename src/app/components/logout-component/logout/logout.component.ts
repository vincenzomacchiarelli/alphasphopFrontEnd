import { Component, OnInit } from '@angular/core';
import { AuthappService } from '../../../services/authapp.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthappService) { }

  ngOnInit(): void {
    this.authService.clearAll()
  }



}
