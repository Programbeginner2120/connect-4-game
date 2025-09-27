import { Component, input } from '@angular/core';
import { PieceColor } from '../../interfaces/game-piece.interface';

@Component({
  selector: 'app-game-piece',
  imports: [],
  templateUrl: './game-piece.html',
  styleUrl: './game-piece.scss'
})
export class GamePiece {
  // Input signals
  color = input.required<PieceColor>();
}
