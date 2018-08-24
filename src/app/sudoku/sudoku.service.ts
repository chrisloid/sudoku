import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Sudoku} from './sudoku';

@Injectable({
  providedIn: 'root'
})

 
export class SudokuService {

  private sudokuApiUrl = 'http://localhost:8080/SudokuWebService/rest/sudoku'; 

  constructor(private http: HttpClient) { }

  solveSudoku(sudoku : Sudoku ): Observable<Sudoku> {
    let sudokuAsString : String ="";

    sudoku.valuesAsStringArray.forEach(element => {
      if (element) {
        sudokuAsString+=element;
      } else {
        sudokuAsString+="0";
      }
    });

    let layoutAsString = "";
    sudoku.layout.forEach(element => {layoutAsString+=element;});

    const url = `${this.sudokuApiUrl}/${sudokuAsString}?layout=${layoutAsString}`;

    return this.http.get<Sudoku>(url);
 
  }
}
