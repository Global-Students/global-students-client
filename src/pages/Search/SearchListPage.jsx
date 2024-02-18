import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SearchList from '../../components/SearchList';

export default function SearchListPage() {
  const { setBoardInfo } = useOutletContext();
  return (
    <div>
      <SearchList
        boardName='전체'
        boardId='전체'
        total
        showMore
        setBoardInfo={setBoardInfo}
      />
      <SearchList
        boardName={localStorage.getItem('boardName_1')}
        boardId={localStorage.getItem('boardId_1')}
        showMore
        setBoardInfo={setBoardInfo}
      />
      <SearchList
        boardName={localStorage.getItem('boardName_2')}
        boardId={localStorage.getItem('boardId_2')}
        showMore
        setBoardInfo={setBoardInfo}
      />
      <SearchList
        boardName={localStorage.getItem('boardName_3')}
        boardId={localStorage.getItem('boardId_3')}
        showMore
        setBoardInfo={setBoardInfo}
      />
    </div>
  );
}
