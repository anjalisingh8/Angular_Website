import { Component } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  result:number = 0;
  answer:number[] = [];


  addition(x:string,y:string){
    let a = parseInt(x);
    let b = parseInt(y);
    this.result = a+b;
  }

  title ="My calculator for Addition";

  multiplication(z:string)
  {
    let num = parseInt(z);
    for(let i = 1; i < num; i++)
    {
      for(let j = 1; j < num; j++)
      {
        if(i  j == num)
        {
          this.answer.push(i);
          this.answer.push(j);
          this.answer[j] = i;
        }
      }
    }

    for(let data of this.answer)
    {
      console.log(data);
    }
  }

}
