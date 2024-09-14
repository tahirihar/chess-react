import { FC } from 'react';
import { Figure } from '../modules/figures/Figure';

interface ILostFigures {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<ILostFigures> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}{' '}
          {figure.logo && (
            <img width={20} height={20} src={figure.logo} />
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
