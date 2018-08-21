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

  solveSudoku(sudokuAsString: String): Observable<Sudoku> {
    const url = `${this.sudokuApiUrl}/${sudokuAsString}`;

    return this.http.get<Sudoku>(url);
 
  }
}
