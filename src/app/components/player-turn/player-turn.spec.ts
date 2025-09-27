import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTurn } from './player-turn';

describe('PlayerTurn', () => {
  let component: PlayerTurn;
  let fixture: ComponentFixture<PlayerTurn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTurn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTurn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
