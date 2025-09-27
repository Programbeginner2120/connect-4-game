import { Component, inject } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { PlayerTurnService } from '../../services/player-turn/player-turn.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-turn',
  imports: [CommonModule],
  templateUrl: './player-turn.html',
  styleUrl: './player-turn.scss'
})
export class PlayerTurn {

  Player = Player;

  // DI
  readonly playerTurnService = inject(PlayerTurnService);

}
