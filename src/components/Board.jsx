import React from 'react';
import { Tile } from './Tile';
import { Strike } from './Strike';

export const Board = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid   grid-cols-3 gap-10 bg-sky-950 text-white p-10">
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
      </div>
      <Strike />
    </div>
  );
};
