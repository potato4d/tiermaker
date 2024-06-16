import React from 'react';
import TierItem from './TierItem';
import { Tier } from '../types';

const tierColors = ['bg-red-500', 'bg-orange-500', 'bg-green-500', 'bg-blue-500', 'bg-gray-500'];

const TierList: React.FC<{ tiers: Tier[] }> = ({ tiers }) => {
  return (
    <div className="tier-list">
      {tiers.map((tier, index) => (
        <div key={tier.name} className="mb-8 flex">
          <div className={`tier-label ${tierColors[index]} text-white w-12 h-12 flex items-center justify-center`}>
            {tier.name}
          </div>
          <div className="flex flex-wrap">
            {tier.decks.map((deck) => (
              <TierItem key={deck.name} deck={deck} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TierList;
