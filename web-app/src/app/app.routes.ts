import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';




export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login-email', component: EmailLoginComponent },
    { path: 'user-profile', component: ProfileComponent },
    { path: 'cart', component: CartComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: CartListComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);