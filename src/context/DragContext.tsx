import React, { createContext, useContext, useState } from 'react';

type DragContextProps = {
  isDragging: boolean;
  setDragging: (dragging: boolean) => void;
}

const DragContext = createContext<DragContextProps | undefined>(undefined);

export const useDragContext = () => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error('useDragContext must be used within a DragProvider');
  }
  return context;
};

export const DragProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDragging, setDragging] = useState(false);

  return (
    <DragContext.Provider value={{ isDragging, setDragging }}>
      {children}
    </DragContext.Provider>
  );
};
