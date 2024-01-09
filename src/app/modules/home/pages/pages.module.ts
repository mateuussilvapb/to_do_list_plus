import { ListComponent } from './list/list.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { ComponentsModule } from '../components/components.module';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [ListComponent],
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
    ComponentsModule,
    FileUploadModule,
  ],
})
export class PagesModule {}
