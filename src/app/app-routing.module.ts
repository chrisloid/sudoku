import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SudokuComponent } from './sudoku/sudoku.component';
import { LayoutComponent } from './layout/layout.component';

const routes : Routes = [
    { path: '', redirectTo: '/sudoku', pathMatch: 'full'},
    { path: 'layout', component: LayoutComponent},
    { path: 'sudoku', component: SudokuComponent},
    { path: 'sudoku/:layout', component: SudokuComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }