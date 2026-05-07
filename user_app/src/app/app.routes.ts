import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [

    { path: '', redirectTo: 'register', pathMatch: 'full' },

    { path: 'register', component: RegisterComponent },

    { path: 'login', component: LoginComponent },

    { path: 'profile', component: ProfileComponent }

];