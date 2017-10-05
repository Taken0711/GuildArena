import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightSpellCardComponent } from './fight-spell-card.component';

describe('FightSpellCardComponent', () => {
  let component: FightSpellCardComponent;
  let fixture: ComponentFixture<FightSpellCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightSpellCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightSpellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
