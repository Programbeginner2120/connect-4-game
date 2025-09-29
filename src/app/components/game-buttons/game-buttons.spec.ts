import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameButtons } from './game-buttons';

describe('GameButtons', () => {
  let component: GameButtons;
  let fixture: ComponentFixture<GameButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
