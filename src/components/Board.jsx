import React, { useState,useEffect } from 'react';
import { Tile } from './Tile';
import { Strike } from './Strike';

export const Board = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [user, setUser] = useState('X');

  useEffect(()=>{
    checkWinner();
  },[tiles])

  const handleClick = (index) => {
    const newTiles = [...tiles];
    if (!newTiles[index]) {
      newTiles[index] = user;
      setTiles(newTiles);
      setUser(user === 'X' ? 'O' : 'X');
    }
  };
  function checkWinner(tiles){
    
  }

  return (
    <div className="flex w-full justify-center items-center h-screen">
      <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-sky-950 text-white p-10">
        {tiles.map((tile, index) => (
          <Tile 
            key={index} 
            value={tile} 
            index={index} 
            onClick={handleClick} 
          />
        ))}
      </div>
      <Strike />
    </div>
  );
};
