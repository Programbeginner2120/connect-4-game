import { Component, input } from '@angular/core';
import { PieceColor } from '../../interfaces/game-piece.interface';
import { Player } from '../../interfaces/player.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-piece',
  imports: [CommonModule],
  templateUrl: './game-piece.html',
  styleUrl: './game-piece.scss'
})
export class GamePiece {
  Player = Player;

  // Input signals
  player = input.required<Player>();
}
