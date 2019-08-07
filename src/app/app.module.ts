import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './Examples/shared.module';
import { NavComponent } from './main/nav/nav.component';
import { TagsComponent } from './main/tags/tags.component';
import { NotesComponent } from './main/notes/notes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
