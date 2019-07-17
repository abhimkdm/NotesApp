import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { StucturalComponent } from './stuctural/stuctural.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BindingsComponent } from '../Examples/bindings/bindings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    DemoComponent,
    StucturalComponent,
    DirectivesComponent,
    HighlightDirective,
    BindingsComponent
  ],
  exports: [
    StucturalComponent,
    BindingsComponent
  ]
})
export class SharedModule { }
