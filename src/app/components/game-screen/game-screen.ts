import { Component } from '@angular/core';
import { GameBoard } from '../game-board/game-board';
import { PlayerScore } from '../player-score/player-score';

@Component({
  selector: 'app-game-screen',
  imports: [GameBoard, PlayerScore],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.scss'
})
export class GameScreen {

}
