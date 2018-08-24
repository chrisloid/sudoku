import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultLayoutValues } from './layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  currentValue : number = 1;
  layoutIsValid : boolean = true;
  layoutValues : String[];

  cellclass : String[] = [
    "area1","area2","area3","area4","area5","area6","area7","area8","area9"
  ]

  constructor( private router : Router ) { }

  ngOnInit() {
    this.layoutValues = DefaultLayoutValues;
  }

  changeLayout(index : number) {
    this.layoutValues[index]=""+this.currentValue;
    this.layoutIsValid = this.checkLayout();
  }

  changeValue(value: number) {
    this.currentValue = value +1;
  }

  checkLayout() : boolean {
    let counter : Array<number> = [0,0,0,0,0,0,0,0,0];
    this.layoutValues.forEach(element => {counter[Number(element)-1]++});
    for (let i=0; i<9; i++) {
        if(counter[i]!=9) return false;
    }
    return true;
  }

}
