import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./components/welcome-component/welcome/welcome.component";
import { LoginComponent } from './components/login-component/login/login.component';
import { CoreModule } from './modules/core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'AlphaShop';

}
