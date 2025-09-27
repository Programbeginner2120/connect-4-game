import { Component } from '@angular/core';
import { GamePiece } from '../game-piece/game-piece';
import { PieceColor } from '../../interfaces/game-piece.interface';

@Component({
  selector: 'app-game-board',
  imports: [GamePiece],
  templateUrl: './game-board.html',
  styleUrl: './game-board.scss'
})
export class GameBoard {

readonly columns = 7;
readonly rows = 6;
readonly grid = Array.from({ length: this.rows }, () => Array(this.columns).fill(0));

PieceColor = PieceColor;

}
