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
import { AssignmentsTableComponent } from './components/assignments-table/assignments-table.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  declarations: [
    AssignmentsTableComponent,
    ItemsListComponent,
    TableHeaderComponent,
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
    AssignmentsTableComponent,
    ItemsListComponent,
    TableHeaderComponent,
    WidgetsComponent,
  ],
})
export class SharedModule {}
