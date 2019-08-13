import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BuyingCartComponent } from './buying-cart/buying-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErphoneComponent } from './erphone/erphone.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { StroyComponent } from './stroy/stroy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyingCartComponent,
    ErphoneComponent,
    SpeakersComponent,
    StroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgbModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,pathMatch:'full'},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'earphone',component:ErphoneComponent},
      {path:'speaker',component:SpeakersComponent},
      {path:'story',component:StroyComponent},
      {path:'buy',component:BuyingCartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
