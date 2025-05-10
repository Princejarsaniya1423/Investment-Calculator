import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  // by betther function
  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // //by computed Function
  // results = computed(() => this.investmentService.resultsData());

  // by asreadonly method
  results = this.investmentService.resultsData.asReadonly();
}
