// import React, { useEffect, useState } from 'react';
// import { initGame, gameSubject, resetGame, handleMove } from './ChessGame/Game';

// const ChessGame = () => {
//     const [game, setGame] = useState(null);

//     useEffect(() => {
//       const subscription = gameSubject.subscribe((game) => setGame(game));
//       initGame();
//       return () => subscription.unsubscribe();
//     }, []);
  
//     if (!game) {
//       return <div>Loading...</div>;
//     }
  
//     const { board, isGameOver, result, pendingPromotion, position } = game;
  
//     const handleClick = (rowIndex, colIndex) => {
//       if (pendingPromotion) {
//         // Handle promotion logic here
//       } else {
//         // Handle regular move logic here
//         const from = ''; // calculate the from position based on rowIndex and colIndex
//         const to = ''; // calculate the to position based on the clicked position
//         handleMove(from, to);
//       }
//     };
  
//     return (
//       <div className="chess-game-container">
//         <h2>Chess Game</h2>
//         <div className="board">
//           {board.map((row, rowIndex) => (
//             <div key={rowIndex} className="row">
//               {row.map((square, colIndex) => (
//                 <div
//                   key={colIndex}
//                   className={`square ${square && square.color === 'w' ? 'white-piece' : 'black-piece'}`}
//                   onClick={() => handleClick(rowIndex, colIndex)}
//                 >
//                   {square ? square.type : ''}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         {isGameOver && <h3>{result}</h3>}
//         <button onClick={resetGame}>Reset Game</button>
//       </div>
//     );
//   };

// export default ChessGame
