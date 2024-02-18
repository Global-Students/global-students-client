import React, { createContext, useContext, useMemo, useState } from 'react';

const BoardInfoContext = createContext();
export function BoardInfoContextProvider({ children }) {
  const [boardInfo, setBoardInfo] = useState();
  const value = useMemo(
    () => ({
      boardInfo,
      setBoardInfo,
    }),
    [boardInfo],
  );
  return (
    <BoardInfoContext.Provider value={value}>
      {children}
    </BoardInfoContext.Provider>
  );
}

export function useBoardInfoContext() {
  return useContext(BoardInfoContext);
}
