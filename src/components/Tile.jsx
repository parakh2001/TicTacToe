import React from "react";

function Tile({ value, onClick, isWinningTile }) {
    const tileStyle = `w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition duration-300 ${isWinningTile ? 'relative' : ''}`;

    return (
        <button 
            className={tileStyle}
            onClick={onClick}
        >
            {value}
            {isWinningTile && <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-red-500 transform -translate-x-1/2 -translate-y-1/2"></div>}
        </button>
    );
}

export default Tile;
