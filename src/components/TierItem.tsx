import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Deck } from '../types';
import { useDragContext } from '../context/DragContext'; // コンテキストのインポート

type TierItemProps = {
  deck: Deck;
  index: number;
  tierIndex: number;
  moveDeck: (dragIndex: number, hoverIndex: number, dragTierIndex: number, hoverTierIndex: number) => void;
  moveDeckToAvailableDecks: (deck: Deck, sourceTierIndex: number) => void;
}

const TierItem: React.FC<TierItemProps> = ({ deck, index, tierIndex, moveDeck, moveDeckToAvailableDecks }) => {
  const { isDragging } = useDragContext(); // ドラッグの状態を取得

  const ref = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'deck',
    hover(item: { index: number; tierIndex: number }) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const dragTierIndex = item.tierIndex;
      const hoverTierIndex = tierIndex;

      if (dragIndex === hoverIndex && dragTierIndex === hoverTierIndex) {
        return;
      }

      moveDeck(dragIndex, hoverIndex, dragTierIndex, hoverTierIndex);
      item.index = hoverIndex;
      item.tierIndex = hoverTierIndex;
    },
  });

  const [{ isDraggingItem }, drag] = useDrag({
    type: 'deck',
    item: { deck, index, tierIndex },
    collect: (monitor) => ({
      isDraggingItem: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop && item.tierIndex === tierIndex) {
        moveDeckToAvailableDecks(item.deck, tierIndex);
      }
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={`tier-item m-2 ${isDraggingItem ? 'opacity-50 border-blue-500' : ''} cursor-grab relative border border-gray-700`} style={{ pointerEvents: isDragging ? 'none' : 'auto' }}>
      <img src={deck.image} alt={deck.name} className="w-[160px] h-[90px] object-cover rounded-sm overflow-hidden" />
      <span className='block text-center w-full absolute left-0 bottom-0 p-1 text-sm font-bold text-white bg-[#000000cc]'>{deck.name}</span>
    </div>
  );
};

export default TierItem;
