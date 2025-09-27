import { Component, inject } from '@angular/core';
import { Score } from '../../services/score/score';

@Component({
  selector: 'app-player-score',
  imports: [],
  templateUrl: './player-score.html',
  styleUrl: './player-score.scss'
})
export class PlayerScore {
  // DI
  readonly scoreService = inject(Score);
}
