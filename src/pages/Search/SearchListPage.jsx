import React from 'react';

import SearchList from '../../components/SearchList';

export default function SearchListPage() {
  return (
    <div>
      <SearchList boardName='전체' boardId='전체' total showMore />
      <SearchList
        boardName={localStorage.getItem('boardName_1')}
        boardId={localStorage.getItem('boardId_1')}
        showMore
      />
      <SearchList
        boardName={localStorage.getItem('boardName_2')}
        boardId={localStorage.getItem('boardId_2')}
        showMore
      />
      <SearchList
        boardName={localStorage.getItem('boardName_3')}
        boardId={localStorage.getItem('boardId_3')}
        showMore
      />
    </div>
  );
}
