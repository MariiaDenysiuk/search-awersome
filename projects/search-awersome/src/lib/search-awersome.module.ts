import { NgModule } from '@angular/core';
import { SearchAwersomeComponent } from './search-awersome.component';
import { TreeTableModule, DropdownModule, MultiSelectModule, ChartModule, EditorModule, InputTextModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SearchAwersomeComponent],
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
  exports: [SearchAwersomeComponent]
})
export class SearchAwersomeModule { }
