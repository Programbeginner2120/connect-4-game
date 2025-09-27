import { Component, inject } from '@angular/core';
import { GamePiece } from '../game-piece/game-piece';
import { PieceColor } from '../../interfaces/game-piece.interface';
import { Player } from '../../interfaces/player.interface';
import { PlayerTurnService } from '../../services/player-turn/player-turn.service';

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

placePiece(column: number) {
  let currRow = this.rows - 1;
  while (currRow >= 0 && this.board[currRow][column] !== null) {
    currRow--;
  }
  if (currRow >= 0) {
    this.board[currRow][column] = this.playerTurnService.currentPlayerTurn;
    // Just gives some time for the view to update
    setTimeout(() => {
      this.checkOverallWin();
    }, 200);
  }

  this.playerTurnService.toggleCurrentPlayerTurn();
}

checkOverallWin() {
  const winnerFound: boolean = this.checkHorizontalWin() || this.checkVerticalWin() || this.checkTopDownDiagonalWin() || this.checkBottomUpDiagonalWin();

  if (winnerFound) {
    alert("WINNER FOUND");
  }
}

private checkHorizontalWin() {
  for (let row = this.board.length - 1; row >= 0; row--) {
    let consecutiveCount: number = 0;
    let currentPlayer: Player | null = null;
    for (let col = 0; col < this.board[row].length; col++) {
      if (this.board[row][col] != null) {
        const playerAtPosition: Player = this.board[row][col];
        if (playerAtPosition) {
          if (!currentPlayer || currentPlayer === playerAtPosition) {
            consecutiveCount++;
          } else {
            consecutiveCount = 1;
          }
          currentPlayer = playerAtPosition;
        }

        if (consecutiveCount == 4) {
          return true;
        }
      }
    }
  }

  return false;
}

private checkVerticalWin() {
  for (let col = 0; col < this.board[0].length; col++) {
    let consecutiveCount: number = 0;
    let currentPlayer: Player | null = null;
    for (let row = this.board.length - 1; row >= 0; row--) {
      if (this.board[row][col] != null) {
        const playerAtPosition: Player = this.board[row][col];
        if (playerAtPosition) {
          if (!currentPlayer || currentPlayer === playerAtPosition) {
            consecutiveCount++;
          } else {
            consecutiveCount = 1;
          }
          currentPlayer = playerAtPosition;
        }

        if (consecutiveCount == 4) {
          return true;
        }
      }
    }
  }

  return false;
}

private checkTopDownDiagonalWin() {
  return false;
}

private checkBottomUpDiagonalWin() {
  return false;
}

}
