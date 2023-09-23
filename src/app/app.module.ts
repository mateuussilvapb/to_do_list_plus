import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { TodoInputAddItemsComponent } from './modules/home/components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './modules/home/components/todo-list/todo-list.component';
import { ListComponent } from './modules/home/pages/list/list.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    TooltipModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
