import React from 'react';
import SearchList from '../../components/SearchList';

export default function SearchListPage() {
  return (
    <div>
      <SearchList boardName='전체' boardId='전체' total showMore />
      <SearchList
        boardName='Hanyang Uni All Students'
        boardId='Hanyang Uni All Students'
        showMore
      />
      <SearchList
        boardName='Hanyang Uni Korean Students'
        boardId='Hanyang Uni Korean Students'
        showMore
      />
      <SearchList
        boardName='South Korea All Students'
        boardId='South Korea All Students'
        showMore
      />
    </div>
  );
}
