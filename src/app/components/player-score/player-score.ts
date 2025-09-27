import { Component, inject } from '@angular/core';
import { ScoreService } from '../../services/score/score.service';

@Component({
  selector: 'app-player-score',
  imports: [],
  templateUrl: './player-score.html',
  styleUrl: './player-score.scss'
})
export class PlayerScore {
  // DI
  readonly scoreService = inject(ScoreService);
}
