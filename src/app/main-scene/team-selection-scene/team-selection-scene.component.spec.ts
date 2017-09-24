import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSelectionSceneComponent } from './team-selection-scene.component';

describe('TeamSelectionSceneComponent', () => {
  let component: TeamSelectionSceneComponent;
  let fixture: ComponentFixture<TeamSelectionSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSelectionSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectionSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
