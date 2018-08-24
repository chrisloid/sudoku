import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultLayoutValues, generateStyleFromLayout } from './layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css', '../sudoku/sudoku.component.css']
})
export class LayoutComponent implements OnInit {

  currentValue : number = 1;
  layoutIsValid : boolean = true;
  layoutValues : String[];
  cellclass : String[] = [];
  counter : Array<number> = [0,0,0,0,0,0,0,0,0];

  buttonclass : String[] = [
    "layoutbutton a1","layoutbutton a2","layoutbutton a3",
    "layoutbutton a4","layoutbutton a5","layoutbutton a6",
    "layoutbutton a7","layoutbutton a8","layoutbutton a9"
  ]

  constructor( private router : Router ) { }

  ngOnInit() {
    this.layoutValues = DefaultLayoutValues;
    this.cellclass = generateStyleFromLayout(this.layoutValues);
    this.checkLayout();
  }

  changeLayout(index : number) {
    this.layoutValues[index]=""+this.currentValue;
    this.cellclass = generateStyleFromLayout(this.layoutValues);
    this.layoutIsValid = this.checkLayout();
  }

  changeValue(value: number) {
    this.currentValue = value +1;
  }

  checkLayout() : boolean {
    this.counter = [0,0,0,0,0,0,0,0,0];
    this.layoutValues.forEach(element => {this.counter[Number(element)-1]++});
    for (let i=0; i<9; i++) {
        if(this.counter[i]!=9) return false;
    }
    return true;
  }

}
