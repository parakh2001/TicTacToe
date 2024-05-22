import React from 'react';

export const Tile = ({ value, onClick, index }) => {
  return (
    <div 
      className='cursor-pointer border-2 border-white flex text-7xl items-center justify-center h-24 w-24'
      onClick={() => onClick(index)}
    >
      {value}
    </div>
  );
};
