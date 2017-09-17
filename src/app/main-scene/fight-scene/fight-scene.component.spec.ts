import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightSceneComponent } from './fight-scene.component';

describe('FightSceneComponent', () => {
  let component: FightSceneComponent;
  let fixture: ComponentFixture<FightSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
