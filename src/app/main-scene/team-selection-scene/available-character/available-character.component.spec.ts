import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCharacterComponent } from './available-character.component';

describe('AvailableCharacterComponent', () => {
  let component: AvailableCharacterComponent;
  let fixture: ComponentFixture<AvailableCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
