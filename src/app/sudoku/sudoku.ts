export class Sudoku {
    public valuesAsStringArray: Array<any>;
    public durationSolvedInMillis : number;
    public solved: boolean;
    public layout: Array<any>;

    constructor(
        valuesAsStringArray : Array<any>,
        durationSolvedInMillis : number,
        solved: boolean,
        layout: Array<any>
    ) {
        this.durationSolvedInMillis = durationSolvedInMillis;
        this.solved = solved;
        this.layout = layout;
        this.valuesAsStringArray = valuesAsStringArray;
    }

}
