import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatButtonModule,
    TooltipModule,
    ButtonModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
