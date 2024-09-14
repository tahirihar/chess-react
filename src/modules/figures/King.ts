import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
    private checkingForCheck: boolean = false;
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

  //попытки написать условие для шаха
    // isKingUnderAttack(target: Cell): boolean {
    //     if (this.checkingForCheck) return false;
    //     this.checkingForCheck = true; 
    //     for (let row of this.cell.board.cells) {
    //         for (let cell of row) {
    //             const figure = cell.figure;
    //             if (figure && figure.color !== this.color) {
    //                 if (figure.canMove(target))
    //                     this.checkingForCheck = false; 
    //                     return true;
    //             }
    //         }
    //     }
    //     this.checkingForCheck = false;
    //     return false;
    // }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        const direction = this.cell.figure?.color === Colors.BLACK
            ? 1 : -1;
        //ход и атака по всем фронтам на одну клетку
        if ((target.y === this.cell.y + direction
            && target.x === this.cell.x)
            || (target.y === this.cell.y
                && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1))
            || (target.y === this.cell.y + direction
                && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1))
            && (this.cell.board.getCell(target.x, target.y).isEmpty() || this.cell.isEnemy(target))
        ) {
            return true;
        }

        //попытки написать условие для шаха
        // if (!this.isKingUnderAttack(target)) {
        //     return false;
        // }

        return false;
    }
}

