import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  rows : any[] = CELLS;
  cellclass : String[] = [
    "cell1","cell1","cell2","cell1","cell1","cell2","cell1","cell1","cell2",
    "cell1","cell1","cell2","cell1","cell1","cell2","cell1","cell1","cell2",
    "cell3","cell3","cell4","cell3","cell3","cell4","cell3","cell3","cell4",
    "cell1","cell1","cell2","cell1","cell1","cell2","cell1","cell1","cell2",
    "cell1","cell1","cell2","cell1","cell1","cell2","cell1","cell1","cell2",
    "cell3","cell3","cell4","cell3","cell3","cell4","cell3","cell3","cell4",
    "cell1","cell1","cell2","cell1","cell1","cell2","cell1","cell1","cell2",
    "cell1","cell1","cell2","cell1","cell1","cell2","cell1","cell1","cell2",
    "cell3","cell3","cell4","cell3","cell3","cell4","cell3","cell3","cell4",
  ]

  ngOnInit() {
  }

  clear() {
  }
}
export const CELLS: any[] =
[
  { cells: ["","","","","8","","","","3"] },
  { cells: ["4","8","","","2","9","","",""] },
  { cells: ["","","","","","","","",""] },
  { cells: ["","","","","","","","",""] },
  { cells: ["","","","","","","","",""] },
  { cells: ["","","","","","","","",""] },
  { cells: ["","","","","","","9","",""] },
  { cells: ["","","","","","","","",""] },
  { cells: ["","","","","","","","",""] }
  
]
