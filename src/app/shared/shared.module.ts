import { NgModule } from '@angular/core';

//modules
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { ItemsListComponent } from './components/items-list/items-list.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableComponent } from './components/table/table.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    TableHeaderComponent,
    TableComponent,
    WidgetsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ItemsListComponent,
    TableHeaderComponent,
    TableComponent,
    WidgetsComponent,
  ],
})
export class SharedModule {}
