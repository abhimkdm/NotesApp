import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SharedModule } from "./Examples/shared.module";
import { NavComponent } from "./main/nav/nav.component";
import { TagsComponent } from "./main/tags/tags.component";
import { NotesComponent } from "./main/notes/notes.component";
import { HttpClientModule } from "@angular/common/http";
import { StarComponent } from "./main/star/star.component";
import { FormsModule } from "@angular/forms";
import { SearchPipe } from "./main/filter/search.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagsComponent,
    NotesComponent,
    StarComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toast-top-center",
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
