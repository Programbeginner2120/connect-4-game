import { ChangeDetectorRef, Component, ElementRef, inject, signal, viewChildren, WritableSignal } from '@angular/core';
import { GamePiece } from '../game-piece/game-piece';
import { PieceColor } from '../../interfaces/game-piece.interface';
import { Player } from '../../interfaces/player.interface';
import { PlayerTurnService } from '../../services/player-turn/player-turn.service';
import { ScoreService } from '../../services/score/score.service';

@Component({
  selector: 'app-game-board',
  imports: [GamePiece],
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss'
})
export class GameBoard {

readonly columns = 7;
readonly rows = 6;
board: Player[][] = Array.from({ length: this.rows }, () => Array(this.columns).fill(null));

PieceColor = PieceColor;
Player = Player;

// DI
readonly playerTurnService = inject(PlayerTurnService);
readonly scoreService = inject(ScoreService);

// Signals
isProcessingPiecePlacement: WritableSignal<boolean> = signal(false);

gameBoardCells = viewChildren<ElementRef>('gameBoardCell');

placePiece(column: number) {
  if (this.isProcessingPiecePlacement()) {
    return;
  }
  this.isProcessingPiecePlacement.set(true);

  let currRow = this.rows - 1;
  while (currRow >= 0 && this.board[currRow][column] !== null) {
    currRow--;
  }
  if (currRow >= 0) {
    this.board[currRow][column] = this.playerTurnService.currentPlayerTurn;
  }

  // Just gives some time for the view to update
  setTimeout(() => {
    const winnerFound = this.checkOverallWin();
    if (winnerFound) {
      const currentPlayer = this.playerTurnService.currentPlayerTurn;
      if (currentPlayer === Player.PLAYER_1) {
        this.scoreService.incrementPlayer1Score();
      } else {
        this.scoreService.incrementPlayer2Score();
      }
      this.resetBoard();
    } else {
      this.playerTurnService.toggleCurrentPlayerTurn();
    }

    this.isProcessingPiecePlacement.set(false);
  }, 200);
}

showHoverEffect(column: number) {
  let currRow = this.rows - 1;
  while (currRow >= 0 && this.board[currRow][column] !== null) {
    currRow--;
  }
  const gameBoardCell = this.gameBoardCells().find(cell => cell.nativeElement.id === `game-board-cell-${currRow}-${column}`);
  if (gameBoardCell) {
    console.log('gameBoardCell', gameBoardCell);
    if (this.playerTurnService.currentPlayerTurn === Player.PLAYER_1) {
      gameBoardCell.nativeElement.classList.add('player-1-hover-effect');
    } else {
      gameBoardCell.nativeElement.classList.add('player-2-hover-effect');
    }
  }
}

removeHoverEffect(column: number) {
  let currRow = this.rows - 1;
  while (currRow >= 0 && this.board[currRow][column] !== null) {
    currRow--;
  }
  const gameBoardCell = this.gameBoardCells().find(cell => cell.nativeElement.id === `game-board-cell-${currRow}-${column}`);
  if (gameBoardCell) {
    gameBoardCell.nativeElement.classList.remove('player-1-hover-effect');
    gameBoardCell.nativeElement.classList.remove('player-2-hover-effect');
  }
}

// TODO: Review this algorithm
checkOverallWin(): boolean {
  const directions = [
    { dr: 0, dc: 1 },   // right
    { dr: 1, dc: 0 },   // down
    { dr: 1, dc: 1 },   // down-right
    { dr: 1, dc: -1 }   // down-left
  ];

  for (let row = 0; row < this.board.length; row++) {
    for (let col = 0; col < this.board[0].length; col++) {
      const player = this.board[row][col];
      if (!player) continue;

      for (const { dr, dc } of directions) {
        let count = 1;
        for (let k = 1; k < 4; k++) {
          const nr = row + dr * k;
          const nc = col + dc * k;

          // Check boundaries
          if (nr < 0 || nr >= this.board.length || nc < 0 || nc >= this.board[0].length) {
            break;
          }

          if (this.board[nr][nc] === player) {
            count++;
          } else {
            break;
          }
        }
        if (count === 4) {
          return true;
        }
      }
    }
  }
  return false;
}

resetBoard() {
  this.board = Array.from({ length: this.rows }, () => Array(this.columns).fill(null));
}

}
