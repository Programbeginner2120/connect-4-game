import { Component, output } from '@angular/core';

@Component({
  selector: 'app-game-buttons',
  imports: [],
  templateUrl: './game-buttons.html',
  styleUrl: './game-buttons.scss'
})
export class GameButtons {

  // Output signals
  newGame = output<void>();
  resetScores = output<void>();

}
