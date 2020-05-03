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
import { LoginComponent } from "./main/login/login.component";
import { DashboardComponent } from "./main/dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "./main/pagenotfound/pagenotfound.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard/:tagid",
    component: DashboardComponent,
    children: [
      {
        path: "notes",
        component: NotesComponent,
      },
    ],
  },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagsComponent,
    NotesComponent,
    StarComponent,
    SearchPipe,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
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
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
