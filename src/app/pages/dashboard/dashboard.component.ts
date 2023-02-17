import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AccountSummaryComponent } from 'src/app/components/account-summary/account-summary.component';
import { AssessmentsComponent } from 'src/app/components/assessments/assessments.component';
import { AssignmentsDueComponent } from 'src/app/components/assignments-due/assignments-due.component';
import { PaymentPlanComponent } from 'src/app/components/payment-plan/payment-plan.component';
import { RecurringPaymentComponent } from 'src/app/components/recurring-payment/recurring-payment.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public title = 'Dashboard';

  firstColumn = [
    AccountSummaryComponent,
    PaymentPlanComponent
  ];

  secondColumn = [
    AssignmentsDueComponent,
    RecurringPaymentComponent,
    AssessmentsComponent,
  ];

  constructor() {}
    
    ngOnInit(): void {
    
    }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
