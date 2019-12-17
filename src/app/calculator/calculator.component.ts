import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  first: number;
  second: number;
  output: number;
  operator = '+';

  onFirstChange(value){
    this.first = parseFloat(value);
  }

  onSecondChange(value){
    this.second = parseFloat(value);
  }

  onSelectChange(value){
    this.operator = value;
  }

  calculate(){
    switch(this.operator){
      case "+":
        this.output = this.first + this.second;
        break;
      case "-":
        this.output = this.first - this.second;
        break;
      case "*":
        this.output = this.first * this.second;
        break;
      case "/":
        this.output = this.first / this.second;
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
