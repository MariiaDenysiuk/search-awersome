import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  ChartModule,
  DropdownModule,
  EditorModule,
  InputTextModule,
  MultiSelectModule,
  TreeTableModule
} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";
import { SearchAwersomeComponent } from 'projects/search-awersome/src/public-api';

@NgModule({
  declarations: [
    AppComponent, SearchAwersomeComponent
  ],
  imports: [
    TreeTableModule,
    DropdownModule,
    MultiSelectModule,
    ChartModule,
    EditorModule,
    InputTextModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
