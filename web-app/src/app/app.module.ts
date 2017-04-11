import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app.routes';
import { DataTableModule } from 'angular-2-data-table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartListComponent,
    LoginComponent,
    CartComponent,
    ProfileComponent,
    SignUpComponent,
    EmailLoginComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
