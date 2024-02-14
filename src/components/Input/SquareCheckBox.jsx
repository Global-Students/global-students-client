import React, { useState } from 'react';

export default function SquareCheckBox({ isChecked }) {
  const [checked, setChecked] = useState(isChecked);
  const checkBoxStyle =
    'w-[21px] h-[21px] bg-square-uncheck bg-no-repeat bg-center checked:bg-square-check transition-all cursor-pointer appearance-none';

  return (
    <input
      className={checkBoxStyle}
      type='checkbox'
      id='squareCheck'
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}
