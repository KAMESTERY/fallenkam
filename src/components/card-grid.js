import React from 'react';
import Card from './card';

const CardGrid = ({data}) => (
    <div>
      {data.map((card, index) => {
        return <Card data={card} key={index}/>;
      })}
    </div>
);

export default CardGrid;
