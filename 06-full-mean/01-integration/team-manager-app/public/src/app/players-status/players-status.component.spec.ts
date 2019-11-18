import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersStatusComponent } from './players-status.component';

describe('PlayersStatusComponent', () => {
  let component: PlayersStatusComponent;
  let fixture: ComponentFixture<PlayersStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
