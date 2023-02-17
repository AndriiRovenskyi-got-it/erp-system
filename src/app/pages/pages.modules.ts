import { NgModule } from '@angular/core';

//modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        ComponentsModule,
        FlexLayoutModule,
        SharedModule,
        DragDropModule,
    ],
  exports: [DashboardComponent],
})
export class PagesModule {}
