import React from 'react';
import { Deck } from '../types';

interface TierItemProps {
  deck: Deck;
}

const TierItem: React.FC<TierItemProps> = ({ deck }) => {
  return (
    <div className="tier-item m-2">
      <img src={deck.image} alt={deck.name} className="w-40 h-24 object-cover" />
      <p className="text-center mt-2">{deck.name}</p>
    </div>
  );
};

export default TierItem;
