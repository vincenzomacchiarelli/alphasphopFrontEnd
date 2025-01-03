import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoreModule } from '../../../modules/core/core.module';
import { WelcomeDataService } from '../../../services/welcome-data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink,CoreModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  userId: string = '';
  titolo: string = 'Benvenuti in AlphaShop';
  sottotitolo: string = 'Visualizza le offerte del giorno';
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.getSaluti();
  }

  getSaluti = () : void => {
    this.welcomeDataService.getSalutiWithUserId(this.userId).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleErrorResponse.bind(this)
    }
    );
  }

  handleResponse = (response: Object) : void => {
   this.titolo = response.toString();
  }

  handleErrorResponse(error: any) {
    this.error = error.error.message;
  }

}
