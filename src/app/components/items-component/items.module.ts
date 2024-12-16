import {  NgModule } from "@angular/core";
import { ItemsGridComponent } from "./items-grid-component/items-grid/items-grid.component";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../modules/core/core.module";
import { ItemsCardComponent } from "./components/items-card/items-card.component";

@NgModule({
  declarations: [
    ItemsCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    ItemsCardComponent,
  ]
})
export class ItemsModule { }
