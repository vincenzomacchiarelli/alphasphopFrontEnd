import { Component, OnInit } from '@angular/core';
import { AuthappService } from '../../../../services/authapp.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthappService
  ) { }

  ngOnInit(): void {
  }

}
