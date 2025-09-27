import { Component } from '@angular/core';
import { GameBoard } from '../game-board/game-board';

@Component({
  selector: 'app-game-screen',
  imports: [GameBoard],
  templateUrl: './game-screen.html',
  styleUrl: './game-screen.scss'
})
export class GameScreen {

}
