import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TierComponent from './TierComponent';
import AvailableDecks from './AvailableDecks';
import { Tier, Deck } from '../types';
import { SAMPLE_DATA } from '../assets/sample';
import domToImage from 'dom-to-image';
import GlobalDropZone from './GlobalDropZone'; // インポートを追加

const INITIAL_AVAILABLE_DECKS: Deck[] = [
  { name: 'Superheavy Samurai', image: 'https://via.placeholder.com/300/FF0000/Superheavy+Samurai' },
  { name: 'Gold Pride', image: 'https://via.placeholder.com/300/FFFF00/Gold+Pride' },
  { name: 'Nemleria', image: 'https://via.placeholder.com/300/00FF00/Nemleria' },
  { name: 'Vanquish Soul', image: 'https://via.placeholder.com/300/0000FF/Vanquish+Soul' },
  // 他のデッキを追加
];

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

  const exportAsImage = () => {
    const element = document.getElementById('tier-list-container');
    const titleElement = document.querySelector('h1'); // <h1>要素を取得
    const footerElement = document.querySelector('footer'); // <h1>要素を取得
    if (element && titleElement && footerElement) {
      const clonedElement = element.cloneNode(true) as HTMLElement;
      const clonedTitle = titleElement.cloneNode(true) as HTMLElement;
      const clonedFooter = footerElement.cloneNode(true) as HTMLElement;
      const style = document.createElement('style');
      style.innerHTML = '.empty-placeholder { opacity: 0; }';
      clonedTitle.style.paddingTop = '16px';
      clonedTitle.style.paddingBottom = '16px';
      clonedTitle.style.paddingRight = '0px';
      clonedTitle.style.marginBottom = '0px';
      clonedTitle.style.background = '#000';
      clonedFooter.style.opacity = '1.0';
      clonedElement.insertBefore(clonedTitle, clonedElement.firstChild); // <h1>要素を追加
      clonedElement.insertBefore(clonedFooter, clonedElement.nextSibling); // <h1>要素を追加
      clonedElement.insertBefore(style, clonedElement.nextSibling); // <h1>要素を追加

      clonedElement.style.width = '816px';
      clonedElement.style.position = 'absolute';
      clonedElement.style.top = '0';
      clonedElement.style.left = '0';
      clonedElement.style.zIndex = '-1';
      clonedElement.style.background = '#1d1d1d';
      document.body.appendChild(clonedElement);

      domToImage.toPng(clonedElement)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'tier-list.png';
          link.click();
          // document.body.removeChild(clonedElement);
        })
        .catch((error) => {
          console.error('Error generating image:', error);
          // document.body.removeChild(clonedElement);
        });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalDropZone moveDeckToAvailableDecks={moveDeckToAvailableDecks}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <button onClick={exportAsImage} className="mb-4 p-2 bg-blue-500 text-white rounded">Save as Image</button>
          <div id="tier-list-container" className="tier-list">
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
