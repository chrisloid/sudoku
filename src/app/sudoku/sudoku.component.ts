import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { SudokuService } from './sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  sudokuForm : FormGroup;
 
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

    this.sudokuForm = this.fb.group( {
      sudokucells: this.fb.array([
        "","","","","8","","","","3",
        "4","8","","","2","9","1","7","",
        "","","1","","","","","","",
        "5","7","","3","","","4","1","9",
        "","","","","4","","","","",
        "6","9","4","","","7","","8","5",
        "","","","","","","9","","",
        "","6","9","8","7","","","2","1",
        "8","","","","9","","","",""
      ]
      )
    });

  }

  
  solveSudoku() {
    console.log("solve:");

    let sudokuvalues = this.sudokuForm.get('sudokucells').value;
    console.log(this.sudokuForm.get('sudokucells').value);

    let sudokuAsString : String;
    sudokuAsString="";

    sudokuvalues.forEach(element => {
      if (element) {
        sudokuAsString+=element;
      } else {
        sudokuAsString+="0";
      }
    });
    console.log(sudokuAsString);
    console.log(sudokuAsString.length);

    
    this.sudokuService.solveSudoku(sudokuAsString).subscribe(s => this.showSudokuSolved(s) );
    
  }

  showSudokuSolved(sudokuSolved : any) {
    console.log(sudokuSolved);
  }
}
