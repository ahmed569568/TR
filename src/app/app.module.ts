import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploadModule } from 'angular2-image-upload';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewDeptComponent } from './new-dept/new-dept.component';
import { NewInvestmentComponent } from './new-investment/new-investment.component';
import { PayDeptComponent } from './pay-dept/pay-dept.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { FullMonthlyReportComponent } from './full-monthly-report/full-monthly-report.component';
import { ArchiveComponent } from './archive/archive.component';
import { ZakatComponent } from './zakat/zakat.component';
import { NoDeptMembersComponent } from './no-dept-members/no-dept-members.component';
import { PenalityReportComponent } from './penality-report/penality-report.component';
import { MembersComponent } from './members/members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { MainDeptComponent } from './main-dept/main-dept.component';
import { MainReportComponent } from './main-report/main-report.component';
import { WatchNormalDeptComponent } from './watch-normal-dept/watch-normal-dept.component';
import { WatchUrgentDeptComponent } from './watch-urgent-dept/watch-urgent-dept.component';
import { InvestmentIncomeComponent } from './investment-income/investment-income.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditMemberDialogComponent } from './edit-member-dialog/edit-member-dialog.component';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EditInvestmentDialogComponent } from './edit-investment-dialog/edit-investment-dialog.component';
import { ConnectMembersComponent } from './connect-members/connect-members.component';
import { MainMembersComponent } from './main-members/main-members.component';
import { FinancialTransactionsSummaryComponent } from './financial-transactions-summary/financial-transactions-summary.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ConfirmAddMemberDialogComponent } from './confirm-add-member-dialog/confirm-add-member-dialog.component';
import { ConfirmAddInvestmentDialogComponent } from './confirm-add-investment-dialog/confirm-add-investment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NotificationsComponent,
    NewDeptComponent,
    NewInvestmentComponent,
    PayDeptComponent,
    MonthlyReportComponent,
    FullMonthlyReportComponent,
    ArchiveComponent,
    ZakatComponent,
    NoDeptMembersComponent,
    PenalityReportComponent,
    MembersComponent,
    MemberProfileComponent,
    InvestmentsComponent,
    InvestmentDetailsComponent,
    MainDeptComponent,
    MainReportComponent,
    WatchNormalDeptComponent,
    WatchUrgentDeptComponent,
    InvestmentIncomeComponent,
    EditMemberDialogComponent,
    AddMemberDialogComponent,
    ConfirmDialogComponent,
    PasswordDialogComponent,
    NavbarComponent,
    SidenavComponent,
    EditInvestmentDialogComponent,
    ConnectMembersComponent,
    MainMembersComponent,
    FinancialTransactionsSummaryComponent,
    AddMemberComponent,
    ConfirmAddMemberDialogComponent,
    ConfirmAddInvestmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AngularDraggableModule,
    NgSelectModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    GalleryModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
