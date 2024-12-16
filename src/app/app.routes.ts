import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login/login.component';
import { WelcomeComponent } from './components/welcome-component/welcome/welcome.component';
import { ErrorComponent } from './components/error-component/error/error.component';
import { ItemsComponent } from './components/items-component/items/items.component';
import { LogoutComponent } from './components/logout-component/logout/logout.component';
import { AuthGuard } from './services/route-guard.service';
import { ItemsGridComponent } from './components/items-component/items-grid-component/items-grid/items-grid.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path:'welcome/:userId', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path:'articoli',component:ItemsComponent , canActivate: [AuthGuard]},
  {path:'articoli/grid', component:ItemsGridComponent , canActivate: [AuthGuard]},
  {path:'logout',component:LogoutComponent},
  {path: '**', component:ErrorComponent}
];
