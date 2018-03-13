import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';


@NgModule({
  declarations: [
    AppComponent,
    DragndropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
