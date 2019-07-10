import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { StucturalComponent } from './stuctural/stuctural.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    DemoComponent,
    StucturalComponent,
    DirectivesComponent,
    HighlightDirective
  ],
  exports: [
    DemoComponent,
    StucturalComponent
  ]
})
export class SharedModule { }
