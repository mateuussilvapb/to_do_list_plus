import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    BrowserAnimationsModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
