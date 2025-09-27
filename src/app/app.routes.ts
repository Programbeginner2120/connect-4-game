import { Routes } from '@angular/router';
import { GameScreen } from './components/game-screen/game-screen';

export const routes: Routes = [
  { path: '', component: GameScreen },
  { path: '**', redirectTo: '' }
];
