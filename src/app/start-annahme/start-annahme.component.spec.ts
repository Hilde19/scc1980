import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAnnahmeComponent } from './start-annahme.component';

describe('StartAnnahmeComponent', () => {
  let component: StartAnnahmeComponent;
  let fixture: ComponentFixture<StartAnnahmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAnnahmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAnnahmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
