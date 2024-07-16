// import { Chess } from 'chess.js';
// import { BehaviorSubject } from 'rxjs';

// const chess = new Chess();
// export let gameSubject = new BehaviorSubject();

// export async function initGame() {
//     const savedGame = localStorage.getItem('savedGame');
//     if (savedGame) {
//         chess.load(savedGame);
//     } else {
//         chess.reset();
//     }
//     updateGame();
// }

// export function resetGame() {
//     chess.reset();
//     updateGame();
// }

// export function handleMove(from, to) {
//     const promotions = chess.moves({ verbose: true }).filter(m => m.promotion);
//     let pendingPromotion;
//     if (promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
//         pendingPromotion = { from, to, color: promotions[0].color };
//         updateGame(pendingPromotion);
//     }
//     if (!pendingPromotion) {
//         move(from, to);
//     }
// }

// export function move(from, to, promotion) {
//     let tempMove = { from, to };
//     if (promotion) {
//         tempMove.promotion = promotion;
//     }
//     if (chess.move(tempMove)) {
//         updateGame();
//     }
// }

// async function updateGame(pendingPromotion) {
//     const isGameOver = chess.game_over();
//     const newGame = {
//         board: chess.board(),
//         pendingPromotion,
//         isGameOver,
//         position: chess.turn(),
//         result: isGameOver ? getGameResult() : null,
//     };
//     localStorage.setItem('savedGame', chess.fen());
//     gameSubject.next(newGame);
// }

// function getGameResult() {
//     if (chess.in_checkmate()) {
//         return `CHECKMATE - WINNER - ${chess.turn() === 'w' ? 'BLACK' : 'WHITE'}`;
//     } else if (chess.in_draw()) {
//         return `DRAW - ${getDrawReason()}`;
//     }
//     return 'UNKNOWN REASON';
// }

// function getDrawReason() {
//     if (chess.in_stalemate()) {
//         return 'STALEMATE';
//     } else if (chess.in_threefold_repetition()) {
//         return 'REPETITION';
//     } else if (chess.insufficient_material()) {
//         return 'INSUFFICIENT MATERIAL';
//     }
//     return '50 - MOVES - RULE';
// }
