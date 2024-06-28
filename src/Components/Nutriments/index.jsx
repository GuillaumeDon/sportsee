import React from 'react';
import Square from '../Square'; 
import CaloriesPicture from '../../assets/calories.png'; 
import ProteinsPicture from '../../assets/proteins.png'; 
import GlucidsPicture from '../../assets/glucids.png'; 
import LipidsPicture from '../../assets/lipids.png'; 

const nutrimentsData = [
  {
    id: 1,
    squareStyle: 'square-nutriments-1',
    squareContent: CaloriesPicture,
    altContent: 'Flamme',
    title: '1500 Calories',
    para: 'Calories',
  },
  {
    id: 2,
    squareStyle: 'square-nutriments-2',
    squareContent: ProteinsPicture,
    altContent: 'Pouet',
    title: '2000 Proteines',
    para: 'Protéines',
  },
  {
    id: 3,
    squareStyle: 'square-nutriments-3',
    squareContent: GlucidsPicture,
    altContent: 'Pomme',
    title: '300 Glucides',
    para: 'Glucides',
  },
  {
    id: 4,
    squareStyle: 'square-nutriments-4',
    squareContent: LipidsPicture,
    altContent: 'Burger',
    title: '1500 Lipids',
    para: 'Lipides',
  },
];

const Nutriments = () => {
  return (
    <div className="resultats-nutriments">
      {nutrimentsData.map(nutriment => (
        <div key={nutriment.id} className={`resultats-nutriments-${nutriment.id}`}>
          <Square squareStyle={nutriment.squareStyle} squareContent={nutriment.squareContent} altContent={nutriment.altContent} />
          <div className={`resultats-nutriments-${nutriment.id}-text`}>
            <h3 className={`resultats-nutriments-${nutriment.id}-text-title`}>{nutriment.title}</h3>
            <p className={`resultats-nutriments-${nutriment.id}-text-para`}>{nutriment.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nutriments;
