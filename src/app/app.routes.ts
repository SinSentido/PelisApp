import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {MovieComponent} from './components/movie/movie.component';
import {RegisterComponent} from './components/register/register.component';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
