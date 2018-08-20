import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 
export class SudokuService {

  private sudokuApiUrl = 'http://localhost:8080/SudokuWebService/rest/sudoku'; 

  constructor(private http: HttpClient) { }

  solveSudoku(sudokuAsString: String): Observable<any> {
    const url = `${this.sudokuApiUrl}/${sudokuAsString}`;

    return this.http.get<String>(url);
 
  }
}
