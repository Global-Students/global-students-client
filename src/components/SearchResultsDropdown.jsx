import React from 'react';
import { useNavigate } from 'react-router-dom';

function SearchResultsDropdown({ searchResults, setSearchClick }) {
  const navigate = useNavigate();
  const clickUnivButton = (result) => {
    setSearchClick((prev) => !prev);
    localStorage.setItem('currentBoardId', result.univBoardId);
    console.log('됐다');
    navigate(`/boards/${result.univBoardId}`);
  };
  return (
    <div className='absolute'>
      <div className='flex flex-col h-[200px]'>
        {searchResults.map((result) => (
          <button
            type='button'
            key={result.univId}
            onClick={clickUnivButton(result)}
          >
            {result.univName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsDropdown;
