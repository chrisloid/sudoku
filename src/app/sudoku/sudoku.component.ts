import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { SudokuService } from './sudoku.service';
import {Sudoku} from './sudoku';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  sudokuForm : FormGroup;
  sudoku : Sudoku;
 
  constructor(private fb: FormBuilder, private sudokuService: SudokuService) {}

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
    this.initSudoku();
    this.sudokuForm = this.fb.group( { sudokucells: this.fb.array(this.sudoku.valuesAsStringArray) });
  }
  
  solveSudoku() {
    let sudokuvalues = this.sudokuForm.get('sudokucells').value;

    let sudokuAsString : String;
    sudokuAsString="";

    sudokuvalues.forEach(element => {
      if (element) {
        sudokuAsString+=element;
      } else {
        sudokuAsString+="0";
      }
    });

    this.sudokuService.solveSudoku(sudokuAsString).subscribe(s => { this.sudoku = s; this.updateSodukuForm() });
  }

  resetSudoku() {
    this.initSudoku();
    this.sudokuForm.reset();
    this.updateSodukuForm();

  }

  updateSodukuForm() {
    this.sudokuForm.get('sudokucells').setValue(this.sudoku.valuesAsStringArray);
  }

  initSudoku() {
    let initValues : Array<String> = [""];
    for (let i=0; i<80;i++) {
      initValues.push("");
    }
    this.sudoku = new Sudoku(initValues,null,null,null);
  }
}
