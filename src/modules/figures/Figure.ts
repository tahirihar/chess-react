import { Colors } from "../Colors";
import { Cell } from "../Cell";


export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}
export class Figure {
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }




    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color)
            return false;
        return true;
    }

    moveFigure(target: Cell) {

    }



}