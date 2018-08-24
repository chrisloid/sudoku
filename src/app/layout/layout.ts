

export const DefaultLayoutValues : String[] = [
    "1","1","1","2","2","2","3","3","3",
    "1","1","1","2","2","2","3","3","3",
    "1","1","1","2","2","2","3","3","3",
    "4","4","4","5","5","5","6","6","6",
    "4","4","4","5","5","5","6","6","6",
    "4","4","4","5","5","5","6","6","6",
    "7","7","7","8","8","8","9","9","9",
    "7","7","7","8","8","8","9","9","9",
    "7","7","7","8","8","8","9","9","9"
  ]

export function generateStyleFromLayout(layout : String[]) : String[] {
    let result : Array<String> = [];

    for (let row=0; row<9; row++) {
      for (let col=0; col<9; col++) {
        let index = row*9+col;
        let rechts = index+1;
        let unten = index+9;

        let styleClass : String = "c0";

        if (col<8 && layout[index] == layout[rechts]) {
          styleClass+=" c1";
        } else {
          styleClass+=" c3";
        }

        if (row<8 && layout[index] == layout[unten]) {
          styleClass+=" c2";
        } else {
          styleClass+=" c4";
        }
        result.push(styleClass);
      }

    }
    return result;
  }
