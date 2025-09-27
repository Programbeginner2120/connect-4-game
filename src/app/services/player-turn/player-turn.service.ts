import { Injectable, signal } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerTurnService {

  private _currentPlayerTurn = signal<Player>(Player.PLAYER_1);

  get currentPlayerTurn() {
    return this._currentPlayerTurn();
  }

  resetCurrentPlayerTurn() {
    this._currentPlayerTurn.set(Player.PLAYER_1);
  }

  toggleCurrentPlayerTurn() {
    this._currentPlayerTurn.set(this._currentPlayerTurn() === Player.PLAYER_1 ? Player.PLAYER_2 : Player.PLAYER_1);
  }
}
