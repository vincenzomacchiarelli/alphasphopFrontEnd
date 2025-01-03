import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';
import { ColorChangeDirective } from '../../custom-directives/color-change.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ColorChangeDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    ColorChangeDirective,
  ]
})
export class CoreModule { }
