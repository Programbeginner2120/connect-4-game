import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePiece } from './game-piece';

describe('GamePiece', () => {
  let component: GamePiece;
  let fixture: ComponentFixture<GamePiece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePiece]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePiece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
