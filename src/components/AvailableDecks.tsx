import React from 'react';
import { useDrag } from 'react-dnd';
import { Deck } from '../types';

interface AvailableDecksProps {
  decks: Deck[];
}

const AvailableDecks: React.FC<AvailableDecksProps> = ({ decks }) => {
  return (
    <div className="available-decks-container overflow-x-auto whitespace-nowrap p-4 bg-gray-800">
      {decks.map((deck, index) => (
        <AvailableDeckItem key={index} deck={deck} />
      ))}
    </div>
  );
};

const AvailableDeckItem: React.FC<{ deck: Deck }> = ({ deck }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'deck',
    item: { deck, index: -1, tierIndex: -1 }, // indexとtierIndexはTier内ではないことを示すために-1を使用
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`inline-block m-2 ${isDragging ? 'opacity-50' : ''} relative border border-gray-700`}>
      <img src={deck.image} alt={deck.name} className="w-40 h-24 object-cover rounded-sm overflow-hidden" />
      <span className='block text-center w-full absolute left-0 bottom-0 p-1 text-sm font-bold text-white bg-[#000000cc]'>{deck.name}</span>
    </div>
  );
};

export default AvailableDecks;
