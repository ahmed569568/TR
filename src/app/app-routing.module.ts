import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { WatchUrgentDeptComponent } from './watch-urgent-dept/watch-urgent-dept.component';
import { WatchNormalDeptComponent } from './watch-normal-dept/watch-normal-dept.component';
import { InvestmentIncomeComponent } from './investment-income/investment-income.component';
import { ConnectMembersComponent } from './connect-members/connect-members.component';
import { MainMembersComponent } from './main-members/main-members.component';
import { FinancialTransactionsSummaryComponent } from './financial-transactions-summary/financial-transactions-summary.component';
import { AddMemberComponent } from './add-member/add-member.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "main", component: MainComponent },
  { path: "members/:index", component: MemberProfileComponent },
  { path: "members", component: MembersComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "newdept", component: NewDeptComponent },
  { path: "newinvestment", component: NewInvestmentComponent },
  { path: "paydept", component: PayDeptComponent },
  { path: "monthlyreport", component: MonthlyReportComponent },
  { path: "fullmonthlyreport", component: FullMonthlyReportComponent },
  { path: "watchurgentdept", component: WatchUrgentDeptComponent },
  { path: "watchnormaldept", component: WatchNormalDeptComponent },
  { path: "investmentincome", component: InvestmentIncomeComponent },
  { path: "penaltyreport", component: PenalityReportComponent },
  { path: "investments", component: InvestmentsComponent },
  { path: "investments/:index", component: InvestmentDetailsComponent },
  { path: "archive", component: ArchiveComponent },
  { path: "zakat", component: ZakatComponent },
  { path: "nodeptmembers", component: NoDeptMembersComponent },
  { path: "maindept", component: MainDeptComponent },
  { path: "mainreports", component: MainReportComponent },
  { path: "connectmembers", component: ConnectMembersComponent },
  { path: "mainmembers", component: MainMembersComponent },
  { path: "financialtransactionssummary", component: FinancialTransactionsSummaryComponent },
  { path: "add-member", component: AddMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
