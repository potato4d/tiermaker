import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TierComponent from './TierComponent';
import AvailableDecks from './AvailableDecks';
import { Tier, Deck } from '../types';
import { SAMPLE_DATA, INITIAL_AVAILABLE_DECKS } from '../assets/sample';
import { exportAsImage } from '../utils/exportImage'; // インポートを追加
import GlobalDropZone from './GlobalDropZone'; // インポートを追加

const TierList: React.FC = () => {
  const [tiers, setTiers] = useState<Tier[]>(SAMPLE_DATA);
  const [availableDecks, setAvailableDecks] = useState<Deck[]>(INITIAL_AVAILABLE_DECKS);

  const moveDeck = useCallback((dragIndex: number, hoverIndex: number, dragTierIndex: number, hoverTierIndex: number) => {
    const newTiers = [...tiers];
    const dragTier = newTiers[dragTierIndex];
    const hoverTier = newTiers[hoverTierIndex];
    const [movedDeck] = dragTier.decks.splice(dragIndex, 1);

    hoverTier.decks.splice(hoverIndex, 0, movedDeck);

    setTiers(newTiers);
  }, [tiers]);

  const moveDeckFromAvailableDecks = useCallback((deck: Deck, hoverTierIndex: number) => {
    const newTiers = [...tiers];
    newTiers[hoverTierIndex].decks.push(deck);
    setTiers(newTiers);
    setAvailableDecks(prevAvailableDecks => prevAvailableDecks.filter(d => d.name !== deck.name));
  }, [tiers]);

  const moveDeckToAvailableDecks = useCallback((deck: Deck, sourceTierIndex: number) => {
    const newTiers = [...tiers];
    newTiers[sourceTierIndex].decks = newTiers[sourceTierIndex].decks.filter(d => d.name !== deck.name);
    setTiers(newTiers);
    setAvailableDecks(prevAvailableDecks => [...prevAvailableDecks, deck]);
  }, [tiers]);

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalDropZone moveDeckToAvailableDecks={moveDeckToAvailableDecks}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <button onClick={exportAsImage} className="mb-4 p-2 bg-blue-500 text-white rounded">Save as Image</button>
          <div id="tier-list-container" className="tier-list mb-2">
            {tiers.map((tier, tierIndex) => (
              <TierComponent
                key={tier.name}
                tier={tier}
                tierIndex={tierIndex}
                moveDeck={moveDeck}
                moveDeckFromAvailableDecks={moveDeckFromAvailableDecks}
                moveDeckToAvailableDecks={moveDeckToAvailableDecks}
              />
            ))}
          </div>
          <AvailableDecks decks={availableDecks} />
        </div>
      </GlobalDropZone>
    </DndProvider>
  );
};

export default TierList;
