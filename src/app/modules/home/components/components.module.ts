import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { TodoInputAddItemsComponent } from './todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule,
    FormsModule,
    MatButtonModule,
    TooltipModule,
    ButtonModule,
  ],
  exports: [TodoListComponent],
})
export class ComponentsModule {}
