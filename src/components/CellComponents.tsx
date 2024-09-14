import { FC } from 'react';
import { Cell } from '../modules/Cell';

interface ICell {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponents: FC<ICell> = ({ cell, selected, click }) => {
  return (
    <div
      className={[
        'cell',
        cell.color,
        selected ? 'selected' : '',
      ].join(' ')}
      onClick={() => click(cell)}
      style={{background: cell.available && cell.figure  ? 'green' : ''}}
      >

      { cell.available && !cell.figure &&  <div className={'avialable'}/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="/" />}
    </div>
  );
};

export default CellComponents;
