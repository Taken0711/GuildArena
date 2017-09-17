import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightCharactCardComponent } from './fight-charact-card.component';

describe('FightCharactCardComponent', () => {
  let component: FightCharactCardComponent;
  let fixture: ComponentFixture<FightCharactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightCharactCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCharactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
