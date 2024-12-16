import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoreModule } from '../../../modules/core/core.module';

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

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  }

}
