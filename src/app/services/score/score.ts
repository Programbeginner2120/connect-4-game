import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Score {
  private _player1Score = signal<number>(0);
  private _player2Score = signal<number>(0);

  get player1Score() {
    return this._player1Score();
  }

  get player2Score() {
    return this._player2Score();
  }

  incrementPlayer1Score() {
    this._player1Score.set(this._player1Score() + 1);
  }

  incrementPlayer2Score() {
    this._player2Score.set(this._player2Score() + 1);
  }

  resetScores() {
    this._player1Score.set(0);
    this._player2Score.set(0);
  }
}
