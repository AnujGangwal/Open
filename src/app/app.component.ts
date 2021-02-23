import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open';
  monthlyIncome = 150000;
  minMonthlyIncome = 100000;
  maxMonthlyIncome = 300000;
  monthlyExpense  = 50000;
  repaymentTenure = "6 Monthly";
  emi = "15000";
  loanExist  = true;
  repaymentTenureList = ["Monthly","6 Monthly", "Yearly"]
}
