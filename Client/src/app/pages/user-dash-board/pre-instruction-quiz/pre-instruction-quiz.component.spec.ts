import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInstructionQuizComponent } from './pre-instruction-quiz.component';

describe('PreInstructionQuizComponent', () => {
  let component: PreInstructionQuizComponent;
  let fixture: ComponentFixture<PreInstructionQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreInstructionQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreInstructionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
