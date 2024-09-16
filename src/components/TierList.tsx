import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TierComponent from './TierComponent';
import AvailableDecks from './AvailableDecks';
import { Tier, Deck } from '../types';
import { SAMPLE_DATA, INITIAL_AVAILABLE_DECKS } from '../assets/masterdata';
import { exportAsImage } from '../utils/exportImage'; // インポートを追加
import GlobalDropZone from './GlobalDropZone'; // インポートを追加
import { DownloadIcon } from './Icon';
import { DragProvider } from '../context/DragContext'; // コンテキストプロバイダーのインポート

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
    setAvailableDecks(prevAvailableDecks => [deck, ...prevAvailableDecks]);
  }, [tiers]);

  return (
    <DragProvider>
      <DndProvider backend={HTML5Backend}>
        <GlobalDropZone moveDeckToAvailableDecks={moveDeckToAvailableDecks}>
          <div style={{ position: 'relative', zIndex: 1 }}>
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
          <div className='w-full max-w-[816px]'>
            <div className='flex pt-4 justify-center items-center'>
              <button
                type="button"
                onClick={exportAsImage}
                className={"w-[calc(50%-8px)] h-20 text-2xl download-button leading-none py-2 flex items-center justify-center appearance-none transition-all text-blue-500 font-bold border-2 border-blue-500 hover:border-bg-blue-600 bg-transparent hover:bg-blue-500 hover:bg-opacity-20"}
              >
                <DownloadIcon className='w-6 h-6' />
                <span className="inline-block ml-1">Download</span>
              </button>
              {/* <div id="share-button" className='w-[calc(50%-8px)] h-20'>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('マスターデュエルのTier表を作ったよ！')}&url=${encodeURIComponent('https://tier.ygotools.com/')}&hashtags=${encodeURIComponent('遊戯王マスターデュエル,TIERMAKERFORMD')}`} target='_blank' className="relative overflow-hidden w-full h-full text-2xl flex items-center justify-center appearance-none border-2 border-white text-white">
                  Share to X
                </a>
              </div> */}
            </div>
          </div>
          <summary className='text-white mt-4 text-sm ml-4'>
            <span className='block mb-2'>更新履歴</span>
            <details>
              <ul>
              <li>2024/08/15: 神碑を追加しました。</li>
              <li>2024/08/05: 粛声を追加しました。</li>
              <li>2024/07/03: センチュリオン/ユベル/エンディミオンを追加しました。</li>
              <li>2024/06/17: v0.1.0 を公開しました。</li>
              </ul>
            </details>
          </summary>
        </GlobalDropZone>
      </DndProvider>
    </DragProvider>
  );
};

export default TierList;
