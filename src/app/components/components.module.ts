import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

//Components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticItemComponent } from './statistics/statistic-item/statistic-item.component';
import { DegreeProgressComponent } from './degree-progress/degree-progress.component';
import { BalanceComponent } from './balance/balance.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementItemComponent } from './announcements/announcement-item/announcement-item.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { RecurringPaymentComponent } from './recurring-payment/recurring-payment.component';
import { AssignmentsDueComponent } from './assignments-due/assignments-due.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { MeetingComponent } from './meeting/meeting.component';
import { SearchComponent } from './header/components/search/search.component';
import { ActionsComponent } from './header/components/actions/actions.component';
import { UserInformationComponent } from './menu/components/user-information/user-information.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SearchComponent,
    ActionsComponent,
    UserInformationComponent,
    MenuComponent,
    ProfileComponent,
    StatisticsComponent,
    StatisticItemComponent,
    DegreeProgressComponent,
    BalanceComponent,
    AnnouncementsComponent,
    AnnouncementItemComponent,
    AccountSummaryComponent,
    PaymentPlanComponent,
    RecurringPaymentComponent,
    AssignmentsDueComponent,
    AssessmentsComponent,
    MeetingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    StatisticsComponent,
    DegreeProgressComponent,
    BalanceComponent,
    AnnouncementsComponent,
    AccountSummaryComponent,
    PaymentPlanComponent,
    RecurringPaymentComponent,
    AssignmentsDueComponent,
    AssessmentsComponent,
    MeetingComponent,
  ],
})
export class ComponentsModule {}
