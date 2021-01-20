import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogTimeComponent } from './common/analog-time/analog-time.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LuckydrawpageComponent } from './luckydrawpage/luckydrawpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogTimeComponent,
    DashboardComponent,
    LuckydrawpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/dashboard'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
