import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();
  
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedInvestment = '5';
  // enteredDuration = '10';

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {

  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedInvestment(),
      annualInvestment: +this.enteredDuration()
    });
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpectedInvestment(),
    //   annualInvestment: +this.enteredDuration()
    // });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedInvestment.set('5');
    this.enteredDuration.set('10');
  }
}
