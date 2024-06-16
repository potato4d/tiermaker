import React from 'react';
import TierList from './components/TierList';
import { Tier } from './types';

const App: React.FC = () => {
  const tiers: Tier[] = [
    {
      name: 'Tier1',
      decks: [
        { name: 'Eagle', image: 'https://via.placeholder.com/300/FF0000/Eagle' },
        { name: 'Sparrow', image: 'https://via.placeholder.com/300/00FF00/Sparrow' },
        { name: 'Hawk', image: 'https://via.placeholder.com/300/0000FF/Hawk' },
        { name: 'Owl', image: 'https://via.placeholder.com/300/FFFF00/Owl' },
      ],
    },
    {
      name: 'Tier2',
      decks: [
        { name: 'Falcon', image: 'https://via.placeholder.com/300/FFA500/Falcon' },
        { name: 'Parrot', image: 'https://via.placeholder.com/300/800080/Parrot' },
      ],
    },
    {
      name: 'Tier3',
      decks: [
        { name: 'Penguin', image: 'https://via.placeholder.com/300/00FFFF/Penguin' },
        { name: 'Pigeon', image: 'https://via.placeholder.com/300/FFC0CB/Pigeon' },
        { name: 'Peacock', image: 'https://via.placeholder.com/300/808080/Peacock' },
      ],
    },
    {
      name: 'Tier4',
      decks: [
        { name: 'Seagull', image: 'https://via.placeholder.com/300/000000/Seagull' },
      ],
    },
  ];

  return (
    <div className="app p-8">
      <h1 className="text-3xl font-bold mb-8">Tier Maker</h1>
      <TierList tiers={tiers} />
    </div>
  );
};

export default App;
