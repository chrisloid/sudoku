import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  sudokuForm : FormGroup;
  sudoku: Sudoku;

  constructor(private fb: FormBuilder) {}


  cellclass : String[] = [
    "c1","c1","c2","c1","c1","c2","c1","c1","c2",
    "c1","c1","c2","c1","c1","c2","c1","c1","c2",
    "c3","c3","c4","c3","c3","c4","c3","c3","c4",
    "c1","c1","c2","c1","c1","c2","c1","c1","c2",
    "c1","c1","c2","c1","c1","c2","c1","c1","c2",
    "c3","c3","c4","c3","c3","c4","c3","c3","c4",
    "c1","c1","c2","c1","c1","c2","c1","c1","c2",
    "c1","c1","c2","c1","c1","c2","c1","c1","c2",
    "c3","c3","c4","c3","c3","c4","c3","c3","c4"
  ]

  ngOnInit() {
    this.sudoku = new Sudoku();

    this.sudokuForm = this.fb.group( {
      sudokucells: this.fb.array(this.sudoku.sudokucells)
    });

  }

  
  solveSudoku() {
    console.log("solve!");
  }
}

class Sudoku {
  sudokucells : String[]

  constructor() {
    this.sudokucells = [
      "1","5","3","","","","","","",
      "","","","","","","","","",
      "","3","","","","","","","",
      "","","","","","","","","",
      "","","","","","","9","","",
      "","","","8","","","","","",
      "","","","4","","","","","",
      "7","","","","","","","","",
      "5","6","","","","","","",""
    ];
  }
}