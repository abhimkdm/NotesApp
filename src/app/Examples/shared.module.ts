import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { StucturalComponent } from './stuctural/stuctural.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BindingsComponent } from '../Examples/bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from '../Examples/pipe/pipe.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { BootstrapComponent } from '../Examples/bootstrap/bootstrap.component';

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
    BindingsComponent,
    PipeComponent,
    ReversePipe,
    BootstrapComponent
  ],
  exports: [
    StucturalComponent,
    BindingsComponent,
    PipeComponent,
    ReversePipe,
    BootstrapComponent
  ]
})
export class SharedModule { }
