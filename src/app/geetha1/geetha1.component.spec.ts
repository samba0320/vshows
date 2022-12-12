import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Geetha1Component } from './geetha1.component';

describe('Geetha1Component', () => {
  let component: Geetha1Component;
  let fixture: ComponentFixture<Geetha1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Geetha1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Geetha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
