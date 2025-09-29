import { Component, inject, viewChild } from '@angular/core';
import { GameBoard } from '../game-board/game-board';
import { PlayerScore } from '../player-score/player-score';
import { PlayerTurn } from '../player-turn/player-turn';
import { GameButtons } from '../game-buttons/game-buttons';
import { ScoreService } from '../../services/score/score.service';

@Component({
  selector: 'app-game-screen',
  imports: [GameBoard, PlayerScore, PlayerTurn, GameButtons],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.scss'
})
export class GameScreen {

  gameBoard = viewChild<GameBoard>(GameBoard);

  // DI
  readonly scoreService = inject(ScoreService);

  handleNewGame() {
    this.gameBoard()?.resetBoard();
  }

  handleResetScores() {
    this.scoreService.resetScores();
  }

}
