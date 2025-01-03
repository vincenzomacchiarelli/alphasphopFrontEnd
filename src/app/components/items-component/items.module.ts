import {  NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../modules/core/core.module";
import { ItemsCardComponent } from "./components/items-card/items-card.component";
import { FormsModule } from "@angular/forms";
import { ColorChangeDirective } from "../../custom-directives/color-change.directive";

@NgModule({
  declarations: [
    ItemsCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
  ],
  exports: [
    ItemsCardComponent,
  ]
})
export class ItemsModule { }
