import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./modules/core/core.module";
import { ItemsModule } from "./components/items-component/items.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    ItemsModule,
    AppComponent
  ],
  providers: [],
})
export class AppModule { }
