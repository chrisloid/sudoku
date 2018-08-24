import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { SudokuService } from './sudoku.service';
import { Sudoku} from './sudoku';
import { DefaultLayoutValues, generateStyleFromLayout } from '../layout/layout';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  sudokuForm : FormGroup;
  sudoku : Sudoku;
  cellclass : String[] = [];
 
  constructor(
    private fb: FormBuilder, 
    private sudokuService: SudokuService,
    private route : ActivatedRoute
  ) {}


  ngOnInit() {
    let layout : any = this.route.snapshot.params['layout'];
    if (!layout) {
      layout = DefaultLayoutValues;
    }
    this.initSudoku(layout);

    this.sudokuForm = this.fb.group( { sudokucells: this.fb.array(this.sudoku.valuesAsStringArray) });
  }
  
  solveSudoku() {
    this.sudoku.valuesAsStringArray = this.sudokuForm.get('sudokucells').value;
    this.sudokuService.solveSudoku(this.sudoku).subscribe(s => { this.solveCallback(s) });
  }

  solveCallback(sudokuSolved : Sudoku) {
    this.sudoku.valuesAsStringArray = sudokuSolved.valuesAsStringArray;
    this.sudoku.durationSolvedInMillis = sudokuSolved.durationSolvedInMillis;
    this.sudoku.solved = sudokuSolved.solved;
    
    this.updateSodukuForm();
  }

  resetSudoku() {
    this.initSudoku(this.sudoku.layout);
    this.sudokuForm.reset();
    this.updateSodukuForm();
  }

  updateSodukuForm() {
    this.sudokuForm.get('sudokucells').setValue(this.sudoku.valuesAsStringArray);
  }

  initSudoku(layout : String[]) {
    let initValues : Array<String> = [""];
    for (let i=0; i<80;i++) {
      initValues.push("");
    }
    this.sudoku = new Sudoku(initValues,null,null,layout);

    this.cellclass = generateStyleFromLayout(this.sudoku.layout);
  }


}
